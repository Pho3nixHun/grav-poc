ARG DENO_VERSION=2.1.5
ARG BIN_IMAGE=denoland/deno:bin-${DENO_VERSION}

FROM ${BIN_IMAGE} AS bin
FROM gcr.io/distroless/cc AS cc
FROM alpine:latest

# Install system dependencies
# Inspired by https://github.com/dojyorin/deno_docker_image/blob/master/src/alpine.dockerfile
COPY --from=cc --chown=root:root --chmod=755 /lib/*-linux-gnu/* /usr/local/lib/
COPY --from=cc --chown=root:root --chmod=755 /lib/ld-linux-* /lib/

# Create a non-root user
ARG UID=1000
ARG GID=1000
ARG USER=deno
ARG GROUP=deno

RUN addgroup --gid ${GID} ${GROUP} \
    && adduser --uid ${UID} --disabled-password ${USER} --ingroup ${GROUP} \
    && mkdir /deno-dir/ \
    && chown ${USER}:${GROUP} /deno-dir/ \
    && mkdir /lib64 \
    && ln -s /usr/local/lib/ld-linux-* /lib64/

# Set environment variables
ARG LD_LIBRARY_PATH="/usr/local/lib"
ENV LD_LIBRARY_PATH=${LD_LIBRARY_PATH}

ARG DENO_DIR="/deno-dir/"
ENV DENO_DIR=${DENO_DIR}

ARG DENO_INSTALL_ROOT="/usr/local"    
ENV DENO_INSTALL_ROOT=${DENO_INSTALL_ROOT}

# Add Deno
ARG DENO_VERSION
ENV DENO_VERSION=${DENO_VERSION}
COPY --from=bin /deno /bin/deno

# Add features
RUN apk update && apk add --no-cache curl fzf git git-lfs github-cli jq zsh
RUN sed -i 's#/bin/sh#/bin/zsh#' /etc/passwd
ARG MOUNT_DIR=/mount
ENV _ZO_DATA_DIR=${MOUNT_DIR}/.zoxide

# Oh My Zsh
ADD https://ohmyposh.dev/install.sh /tmp/omp-install.sh
RUN sh /tmp/omp-install.sh -d /bin
ARG OMP_CONFIG="https://raw.githubusercontent.com/dreamsofautonomy/zen-omp/refs/heads/main/zen.toml"
ENV OMP_CONFIG=${OMP_CONFIG}

# Add Tini
ARG TINI_VERSION=0.19.0
ARG TARGETARCH

ADD https://github.com/krallin/tini/releases/download/v${TINI_VERSION}/tini-${TARGETARCH} /tini
RUN chmod +x /tini

COPY .zshrc /root/.zshrc

ENTRYPOINT ["/tini", "--" ]
CMD ["zsh"]
# CMD ["ohmyposh", "init", "zsh", "--config", "${OMP_CONFIG}", "&&", "zsh"]