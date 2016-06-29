var config = {
    // Language for the mirror (currently not implemented)
    language : "ko",
    greeting : ["안녕하세요. 제로미러입니다.","무엇을 보여드릴까요?"], // An array of greetings to randomly choose from
    
    // forcast.io
    forcast : {
        key : "d9b16526a76942e7249280530612ef1a", // Your forcast.io api key
        units : "auto" // See forcast.io documentation if you are getting the wrong units
    },
    
    // Calendar (An array of iCals)
    calendar: {
      // google 캘린더에서 캘린더 환경설정 => 캘린더 내보내기 하여 파일로 생성함
      icals : ["NaverCalendar_ziostone_2016-06-21.ics"],
      //icals : ["https://calendar.google.com/calendar/ical/youngseock.kim%40gmail.com/private-99479886edf825a62209e6bb2898e088/basic.ics"],
      // icals : ["http://me2.do/FcHvwF2q"],
      maxResults: 9, // Number of calender events to display (Defaults is 9)
      maxDays: 365 // Number of days to display (Default is one year)
    },
    
//    traffic: {
//      key : "AgAEoldMoBqu6O4sF3NHk6WY-e2CFU79vQKBqyVrnfcww-G1jSyYCHpABmkfAMoc", // Bing Maps API Key
//      mode : "Transit", // Possibilities: Driving / Transit / Walking
//      origin : "양촌", // Start of your trip. Human readable address.
//      destination : "을지로입구역", // Destination of your trip. Human readable address.
//      name : "출근길", // Name of your destination ex: "work"
//      reload_interval : 5 // Number of minutes the information is refreshed
//    },

    youtube: {
      key:"AIzaSyDUZn3aiHdDsDMWDCtthdAGryVYtoTMsgY"
    },

    subway: {
      key:"....."
    },
    soundcloud: {
    	Client_ID : "ab33147bb9738373591f187237367da8",
    	key:"....."
    }
}
