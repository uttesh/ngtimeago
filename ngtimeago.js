'use strict';

var catalyst = angular.module('ngtimeago', []);

var getTranslateTime = function() {
  var language = localStorage['current_language'] == undefined ? 'en' : localStorage['current_language'];
  var strings = {
      prefixAgo: '',
      prefixFromNow: '',
      suffixAgo: "ago",
      suffixFromNow: "from now",
      seconds: "~ a min",
      minute: "a min",
      minutes: "%d mins",
      hour: "1 hour",
      hours: "%d hours",
      day: "1 day",
      days: "%d days",
      month: "1 month",
      months: "%d months",
      year: "1 year",
      years: "%d years"
  }
  if(language == 'kh') {
    strings.suffixAgo = 'មុន'
    strings.suffixFromNow = 'មុន'
    strings.seconds = '~ មួយនាទី'
    strings.minute = 'មួយនាទី'
    strings.minutes = '%d នាទី'
    strings.hour = '1 ម៉ោង'
    strings.hours = '%d ម៉ោង'
    strings.day = '1 ថ្ងៃ'
    strings.days = '%d ថ្ងៃ'
    strings.month = '1 ខែ'
    strings.months = '%d ខែ'
    strings.year = '1 ឆ្នាំ',
    strings.years = '%d ឆ្នាំ'
  }
  else if(language == 'vn') {
    strings.suffixAgo = 'trước'
    strings.suffixFromNow = 'trước'
    strings.seconds = '~ một phút'
    strings.minute = 'một phút'
    strings.minutes = '%d phút'
    strings.hour = '1 giờ'
    strings.hours = '%d giờ'
    strings.day = '1 ngày'
    strings.days = '%d ngày'
    strings.month = '1 tháng'
    strings.months = '%d tháng'
    strings.year = '1 năm',
    strings.years = '%d năm'
  }

  return strings;
}

catalyst.filter('timeago', function() {
        return function(input, p_allowFuture) {
            var substitute = function (stringOrFunction, number, strings) {
                    var string = angular.isFunction(stringOrFunction) ? stringOrFunction(number, dateDifference) : stringOrFunction;
                    var value = (strings.numbers && strings.numbers[number]) || number;
                    return string.replace(/%d/i, value);
                },
                currentLanguage = localStorage['current_language'] == undefined ? "en" : localStorage['current_language'],
                nowTime = (new Date()).getTime(),
                date = (new Date(input)).getTime(),
                //refreshMillis= 6e4, //A minute
                allowFuture = p_allowFuture || false,
                strings= getTranslateTime(),
                dateDifference = nowTime - date,
                words,
                seconds = Math.abs(dateDifference) / 1000,
                minutes = seconds / 60,
                hours = minutes / 60,
                days = hours / 24,
                years = days / 365,
                separator = strings.wordSeparator === undefined ?  " " : strings.wordSeparator,


                prefix = strings.prefixAgo,
                suffix = strings.suffixAgo;

            if (allowFuture) {
                if (dateDifference < 0) {
                    prefix = strings.prefixFromNow;
                    suffix = strings.suffixFromNow;
                }
            }

            words = seconds < 45 && substitute(strings.seconds, Math.round(seconds), strings) ||
            seconds < 90 && substitute(strings.minute, 1, strings) ||
            minutes < 45 && substitute(strings.minutes, Math.round(minutes), strings) ||
            minutes < 90 && substitute(strings.hour, 1, strings) ||
            hours < 24 && substitute(strings.hours, Math.round(hours), strings) ||
            hours < 42 && substitute(strings.day, 1, strings) ||
            days < 30 && substitute(strings.days, Math.round(days), strings) ||
            days < 45 && substitute(strings.month, 1, strings) ||
            days < 365 && substitute(strings.months, Math.round(days / 30), strings) ||
            years < 1.5 && substitute(strings.year, 1, strings) ||
            substitute(strings.years, Math.round(years), strings);
			// console.log(prefix+words+suffix+separator);
			prefix.replace(/ /g, '')
			words.replace(/ /g, '')
			suffix.replace(/ /g, '')
      if(currentLanguage == 'kh')
        return (prefix+' '+words+''+suffix+' '+separator);

			return (prefix+' '+words+' '+suffix+' '+separator);

        };
    });
