(function(){

    $(function() {
        new TimezZ('.timer', {
            date: 'March 8, 2018 00:00:00',
            daysName: 'Days',
            hoursName: 'Hours',
            minutesName: 'Minutes',
            secondsName: 'Seconds',
            tagNumber: 'span',
            tagLetter: 'i',
            stop: false,
           });
    });

})();