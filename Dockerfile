FROM jenkins/jenkins:lts
USER root
RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    wget \
    gnupg \
    hicolor-icon-theme \
    fontconfig \
    fonts-liberation
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt install ./google-chrome-stable_current_amd64.deb -y
USER jenkins
