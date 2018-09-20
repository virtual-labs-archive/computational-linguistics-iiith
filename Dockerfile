FROM ubuntu:12.04

# Usage: File Author/Maintainer
MAINTAINER vlead-systems "systems@vlabs.ac.in"

#Usage: Setting proxy environment
#ENV http_proxy "http://proxy.iiit.ac.in:8080"
#ENV https_proxy "http://proxy.iiit.ac.in:8080"

# Usage: Updating system
RUN apt-get update

# Usage: Installing dependencies for computer graphics lab
RUN apt-get install -y make php5 apache2 rsync

RUN mkdir /computational-linguistics-iiith

COPY src/ /computational-linguistics-iiith/src

WORKDIR ./computational-linguistics-iiith/src

#Usage: Running make
RUN make

#Usage: Copying lab sources into web server path
RUN rm -rf /var/www/*
RUN cp -r ../build/* /var/www/

EXPOSE 80
EXPOSE 443

#Usage: Setting permissions in /var/www
RUN chmod -R 755 /var/www/*

CMD /usr/sbin/apache2ctl -D FOREGROUND
