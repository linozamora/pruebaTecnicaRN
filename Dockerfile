FROM reactnativecommunity/react-native-android:2.1

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN sudo apt install update
RUN gem install bundler
RUN sudo apt install bundler

RUN bundle exec fastlane build_android
