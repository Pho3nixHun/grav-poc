FROM denoland/deno:bin-2.1.5 AS deno
FROM mcr.microsoft.com/devcontainers/typescript-node:22
COPY --from=deno /deno /usr/local/bin/deno

RUN apt update && \
    apt install -y fzf git git-lfs jq zoxide zsh && \
    apt clean && \
    rm -rf /var/lib/apt/lists/* && \
    sed -i 's#/bin/bash#/bin/zsh#' /etc/passwd


ADD https://ohmyposh.dev/install.sh /tmp/omp-install.sh
RUN chmod +x /tmp/omp-install.sh && /tmp/omp-install.sh -d /bin
ARG OMP_CONFIG="https://raw.githubusercontent.com/dreamsofautonomy/zen-omp/refs/heads/main/zen.toml"
ENV OMP_CONFIG=${OMP_CONFIG}
RUN rm -rf /tmp/*

USER node
RUN echo 'eval "$(oh-my-posh init zsh -c ${OMP_CONFIG})"' >> ~/.zshrc && \
    echo 'eval "$(zoxide init zsh --cmd cd)"' >> ~/.zshrc

USER root