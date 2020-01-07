build-dir=../build
lib-dir=lib
build-js-dir=${build-dir}/js

theme=blue-icon


all: patch-analytics help-dir 

help-dir:

	(touch ${build-dir}/theme-${theme}; rsync -avC --exclude ${mathjax}.zip lab/* lib/* help themes/${theme}/* ${build-dir})





# don't remove the js directory, since copying it again with mathjax takes too long.
# http://superuser.com/questions/168130/unix-delete-files-and-folders-excluding-pattern
clean:
	(find ${build-dir} -mindepth 1 -maxdepth 1 ! -name js -print0 | xargs -0n1 rm -rf)


patch-analytics:
	git clone https://github.com/virtual-labs/vlabs-analytics.git
	cp vlabs-analytics/gtm-patcher.py ../scripts/.
	cp vlabs-analytics/patch-analytics.sh ../scripts/.
	chmod +x ../scripts/patch-analytics.sh 
	../scripts/patch-analytics.sh
	rm -rf vlabs-analytics
	rm -rf ../scripts/patch-analytics.sh
	rm -rf ../scripts/gtm-patcher.py
