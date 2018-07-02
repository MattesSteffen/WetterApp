/* 
 * Local Weather in case of the API disconeccted or the amount of calls was exeeded. Only for demo Purposes!! 
 */
var localWeather = {
	"current" : {
		"coord" : {
			"lon" : 8.42,
			"lat" : 49.01
		},
		"weather" : [ {
			"id" : 800,
			"main" : "Clear",
			"description" : "clear sky",
			"icon" : "01d"
		} ],
		"base" : "stations",
		"main" : {
			"temp" : 300.1,
			"pressure" : 1013,
			"humidity" : 23,
			"temp_min" : 298.15,
			"temp_max" : 302.15
		},
		"visibility" : 10000,
		"wind" : {
			"speed" : 7.2,
			"deg" : 30
		},
		"clouds" : {
			"all" : 0
		},
		"dt" : 1530535800,
		"sys" : {
			"type" : 1,
			"id" : 4921,
			"message" : 0.0024,
			"country" : "DE",
			"sunrise" : 1530502024,
			"sunset" : 1530560012
		},
		"id" : 2846518,
		"name" : "Rintheim",
		"cod" : 200
	},
	"forecast" : {
		"cod" : "200",
		"message" : 0.0082,
		"cnt" : 40,
		"list" : [ {
			"dt" : 1530543600,
			"main" : {
				"temp" : 301.68,
				"temp_min" : 301.305,
				"temp_max" : 301.68,
				"pressure" : 1006.74,
				"sea_level" : 1026.81,
				"grnd_level" : 1006.74,
				"humidity" : 28,
				"temp_kf" : 0.37
			},
			"weather" : [ {
				"id" : 800,
				"main" : "Clear",
				"description" : "clear sky",
				"icon" : "01d"
			} ],
			"clouds" : {
				"all" : 0
			},
			"wind" : {
				"speed" : 4.57,
				"deg" : 80.5009
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-02 15:00:00"
		}, {
			"dt" : 1530554400,
			"main" : {
				"temp" : 300.29,
				"temp_min" : 300.007,
				"temp_max" : 300.29,
				"pressure" : 1007.02,
				"sea_level" : 1027.04,
				"grnd_level" : 1007.02,
				"humidity" : 25,
				"temp_kf" : 0.28
			},
			"weather" : [ {
				"id" : 800,
				"main" : "Clear",
				"description" : "clear sky",
				"icon" : "01d"
			} ],
			"clouds" : {
				"all" : 0
			},
			"wind" : {
				"speed" : 4.01,
				"deg" : 77.0021
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-02 18:00:00"
		}, {
			"dt" : 1530565200,
			"main" : {
				"temp" : 294.58,
				"temp_min" : 294.391,
				"temp_max" : 294.58,
				"pressure" : 1008.02,
				"sea_level" : 1028.26,
				"grnd_level" : 1008.02,
				"humidity" : 29,
				"temp_kf" : 0.19
			},
			"weather" : [ {
				"id" : 800,
				"main" : "Clear",
				"description" : "clear sky",
				"icon" : "01n"
			} ],
			"clouds" : {
				"all" : 0
			},
			"wind" : {
				"speed" : 4.87,
				"deg" : 60.5016
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-02 21:00:00"
		}, {
			"dt" : 1530576000,
			"main" : {
				"temp" : 291.7,
				"temp_min" : 291.609,
				"temp_max" : 291.7,
				"pressure" : 1008.73,
				"sea_level" : 1029.12,
				"grnd_level" : 1008.73,
				"humidity" : 39,
				"temp_kf" : 0.09
			},
			"weather" : [ {
				"id" : 800,
				"main" : "Clear",
				"description" : "clear sky",
				"icon" : "01n"
			} ],
			"clouds" : {
				"all" : 0
			},
			"wind" : {
				"speed" : 4.37,
				"deg" : 74.5016
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-03 00:00:00"
		}, {
			"dt" : 1530586800,
			"main" : {
				"temp" : 288.942,
				"temp_min" : 288.942,
				"temp_max" : 288.942,
				"pressure" : 1009.31,
				"sea_level" : 1029.57,
				"grnd_level" : 1009.31,
				"humidity" : 48,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 800,
				"main" : "Clear",
				"description" : "clear sky",
				"icon" : "01n"
			} ],
			"clouds" : {
				"all" : 0
			},
			"wind" : {
				"speed" : 3.57,
				"deg" : 76.0003
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-03 03:00:00"
		}, {
			"dt" : 1530597600,
			"main" : {
				"temp" : 291.824,
				"temp_min" : 291.824,
				"temp_max" : 291.824,
				"pressure" : 1010.01,
				"sea_level" : 1030.18,
				"grnd_level" : 1010.01,
				"humidity" : 42,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 800,
				"main" : "Clear",
				"description" : "clear sky",
				"icon" : "02d"
			} ],
			"clouds" : {
				"all" : 8
			},
			"wind" : {
				"speed" : 3.61,
				"deg" : 74.0008
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-03 06:00:00"
		}, {
			"dt" : 1530608400,
			"main" : {
				"temp" : 298.431,
				"temp_min" : 298.431,
				"temp_max" : 298.431,
				"pressure" : 1009.61,
				"sea_level" : 1029.68,
				"grnd_level" : 1009.61,
				"humidity" : 38,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 801,
				"main" : "Clouds",
				"description" : "few clouds",
				"icon" : "02d"
			} ],
			"clouds" : {
				"all" : 12
			},
			"wind" : {
				"speed" : 4.5,
				"deg" : 85.5012
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-03 09:00:00"
		}, {
			"dt" : 1530619200,
			"main" : {
				"temp" : 301.475,
				"temp_min" : 301.475,
				"temp_max" : 301.475,
				"pressure" : 1008.74,
				"sea_level" : 1028.79,
				"grnd_level" : 1008.74,
				"humidity" : 34,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 801,
				"main" : "Clouds",
				"description" : "few clouds",
				"icon" : "02d"
			} ],
			"clouds" : {
				"all" : 20
			},
			"wind" : {
				"speed" : 3.17,
				"deg" : 100
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-03 12:00:00"
		}, {
			"dt" : 1530630000,
			"main" : {
				"temp" : 302.974,
				"temp_min" : 302.974,
				"temp_max" : 302.974,
				"pressure" : 1007.69,
				"sea_level" : 1027.67,
				"grnd_level" : 1007.69,
				"humidity" : 32,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 801,
				"main" : "Clouds",
				"description" : "few clouds",
				"icon" : "02d"
			} ],
			"clouds" : {
				"all" : 12
			},
			"wind" : {
				"speed" : 1.77,
				"deg" : 117
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-03 15:00:00"
		}, {
			"dt" : 1530640800,
			"main" : {
				"temp" : 302.013,
				"temp_min" : 302.013,
				"temp_max" : 302.013,
				"pressure" : 1006.79,
				"sea_level" : 1026.92,
				"grnd_level" : 1006.79,
				"humidity" : 29,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 802,
				"main" : "Clouds",
				"description" : "scattered clouds",
				"icon" : "03d"
			} ],
			"clouds" : {
				"all" : 36
			},
			"wind" : {
				"speed" : 1.51,
				"deg" : 268.001
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-03 18:00:00"
		}, {
			"dt" : 1530651600,
			"main" : {
				"temp" : 296.012,
				"temp_min" : 296.012,
				"temp_max" : 296.012,
				"pressure" : 1007.44,
				"sea_level" : 1027.68,
				"grnd_level" : 1007.44,
				"humidity" : 50,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 802,
				"main" : "Clouds",
				"description" : "scattered clouds",
				"icon" : "03n"
			} ],
			"clouds" : {
				"all" : 44
			},
			"wind" : {
				"speed" : 1.36,
				"deg" : 264.001
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-03 21:00:00"
		}, {
			"dt" : 1530662400,
			"main" : {
				"temp" : 292.322,
				"temp_min" : 292.322,
				"temp_max" : 292.322,
				"pressure" : 1007.79,
				"sea_level" : 1028.08,
				"grnd_level" : 1007.79,
				"humidity" : 60,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 801,
				"main" : "Clouds",
				"description" : "few clouds",
				"icon" : "02n"
			} ],
			"clouds" : {
				"all" : 12
			},
			"wind" : {
				"speed" : 1.06,
				"deg" : 279.507
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-04 00:00:00"
		}, {
			"dt" : 1530673200,
			"main" : {
				"temp" : 290.565,
				"temp_min" : 290.565,
				"temp_max" : 290.565,
				"pressure" : 1007.21,
				"sea_level" : 1027.52,
				"grnd_level" : 1007.21,
				"humidity" : 66,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 801,
				"main" : "Clouds",
				"description" : "few clouds",
				"icon" : "02n"
			} ],
			"clouds" : {
				"all" : 24
			},
			"wind" : {
				"speed" : 0.87,
				"deg" : 163
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-04 03:00:00"
		}, {
			"dt" : 1530684000,
			"main" : {
				"temp" : 293.858,
				"temp_min" : 293.858,
				"temp_max" : 293.858,
				"pressure" : 1007.63,
				"sea_level" : 1027.8,
				"grnd_level" : 1007.63,
				"humidity" : 65,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10d"
			} ],
			"clouds" : {
				"all" : 56
			},
			"wind" : {
				"speed" : 2.06,
				"deg" : 284
			},
			"rain" : {
				"3h" : 0.51
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-04 06:00:00"
		}, {
			"dt" : 1530694800,
			"main" : {
				"temp" : 299.833,
				"temp_min" : 299.833,
				"temp_max" : 299.833,
				"pressure" : 1007.11,
				"sea_level" : 1026.98,
				"grnd_level" : 1007.11,
				"humidity" : 60,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10d"
			} ],
			"clouds" : {
				"all" : 12
			},
			"wind" : {
				"speed" : 3.31,
				"deg" : 243.003
			},
			"rain" : {
				"3h" : 0.015
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-04 09:00:00"
		}, {
			"dt" : 1530705600,
			"main" : {
				"temp" : 303.301,
				"temp_min" : 303.301,
				"temp_max" : 303.301,
				"pressure" : 1005.29,
				"sea_level" : 1025.28,
				"grnd_level" : 1005.29,
				"humidity" : 48,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 800,
				"main" : "Clear",
				"description" : "clear sky",
				"icon" : "02d"
			} ],
			"clouds" : {
				"all" : 8
			},
			"wind" : {
				"speed" : 4.81,
				"deg" : 269.503
			},
			"rain" : {},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-04 12:00:00"
		}, {
			"dt" : 1530716400,
			"main" : {
				"temp" : 299.519,
				"temp_min" : 299.519,
				"temp_max" : 299.519,
				"pressure" : 1004.85,
				"sea_level" : 1024.95,
				"grnd_level" : 1004.85,
				"humidity" : 73,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10d"
			} ],
			"clouds" : {
				"all" : 44
			},
			"wind" : {
				"speed" : 2.95,
				"deg" : 304.501
			},
			"rain" : {
				"3h" : 2.295
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-04 15:00:00"
		}, {
			"dt" : 1530727200,
			"main" : {
				"temp" : 294.983,
				"temp_min" : 294.983,
				"temp_max" : 294.983,
				"pressure" : 1005.09,
				"sea_level" : 1024.84,
				"grnd_level" : 1005.09,
				"humidity" : 78,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10d"
			} ],
			"clouds" : {
				"all" : 36
			},
			"wind" : {
				"speed" : 2.16,
				"deg" : 197.5
			},
			"rain" : {
				"3h" : 2.43
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-04 18:00:00"
		}, {
			"dt" : 1530738000,
			"main" : {
				"temp" : 292.22,
				"temp_min" : 292.22,
				"temp_max" : 292.22,
				"pressure" : 1004.65,
				"sea_level" : 1024.82,
				"grnd_level" : 1004.65,
				"humidity" : 90,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10n"
			} ],
			"clouds" : {
				"all" : 24
			},
			"wind" : {
				"speed" : 1.28,
				"deg" : 136.002
			},
			"rain" : {
				"3h" : 0.03
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-04 21:00:00"
		}, {
			"dt" : 1530748800,
			"main" : {
				"temp" : 290.612,
				"temp_min" : 290.612,
				"temp_max" : 290.612,
				"pressure" : 1005.57,
				"sea_level" : 1025.76,
				"grnd_level" : 1005.57,
				"humidity" : 91,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10n"
			} ],
			"clouds" : {
				"all" : 44
			},
			"wind" : {
				"speed" : 3.61,
				"deg" : 248.501
			},
			"rain" : {
				"3h" : 0.18
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-05 00:00:00"
		}, {
			"dt" : 1530759600,
			"main" : {
				"temp" : 289.921,
				"temp_min" : 289.921,
				"temp_max" : 289.921,
				"pressure" : 1006.17,
				"sea_level" : 1026.32,
				"grnd_level" : 1006.17,
				"humidity" : 93,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10n"
			} ],
			"clouds" : {
				"all" : 36
			},
			"wind" : {
				"speed" : 3.11,
				"deg" : 224.501
			},
			"rain" : {
				"3h" : 0.16
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-05 03:00:00"
		}, {
			"dt" : 1530770400,
			"main" : {
				"temp" : 292.301,
				"temp_min" : 292.301,
				"temp_max" : 292.301,
				"pressure" : 1006.72,
				"sea_level" : 1026.79,
				"grnd_level" : 1006.72,
				"humidity" : 84,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 802,
				"main" : "Clouds",
				"description" : "scattered clouds",
				"icon" : "03d"
			} ],
			"clouds" : {
				"all" : 36
			},
			"wind" : {
				"speed" : 3.48,
				"deg" : 232.503
			},
			"rain" : {},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-05 06:00:00"
		}, {
			"dt" : 1530781200,
			"main" : {
				"temp" : 295.699,
				"temp_min" : 295.699,
				"temp_max" : 295.699,
				"pressure" : 1007.2,
				"sea_level" : 1027.18,
				"grnd_level" : 1007.2,
				"humidity" : 73,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 803,
				"main" : "Clouds",
				"description" : "broken clouds",
				"icon" : "04d"
			} ],
			"clouds" : {
				"all" : 64
			},
			"wind" : {
				"speed" : 4.21,
				"deg" : 240.004
			},
			"rain" : {},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-05 09:00:00"
		}, {
			"dt" : 1530792000,
			"main" : {
				"temp" : 298.025,
				"temp_min" : 298.025,
				"temp_max" : 298.025,
				"pressure" : 1007.16,
				"sea_level" : 1027.12,
				"grnd_level" : 1007.16,
				"humidity" : 64,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10d"
			} ],
			"clouds" : {
				"all" : 80
			},
			"wind" : {
				"speed" : 4.57,
				"deg" : 250.505
			},
			"rain" : {
				"3h" : 0.06
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-05 12:00:00"
		}, {
			"dt" : 1530802800,
			"main" : {
				"temp" : 296.09,
				"temp_min" : 296.09,
				"temp_max" : 296.09,
				"pressure" : 1007.11,
				"sea_level" : 1027.22,
				"grnd_level" : 1007.11,
				"humidity" : 86,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10d"
			} ],
			"clouds" : {
				"all" : 32
			},
			"wind" : {
				"speed" : 4.02,
				"deg" : 259.5
			},
			"rain" : {
				"3h" : 2.25
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-05 15:00:00"
		}, {
			"dt" : 1530813600,
			"main" : {
				"temp" : 292.688,
				"temp_min" : 292.688,
				"temp_max" : 292.688,
				"pressure" : 1008.23,
				"sea_level" : 1028.28,
				"grnd_level" : 1008.23,
				"humidity" : 98,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 501,
				"main" : "Rain",
				"description" : "moderate rain",
				"icon" : "10d"
			} ],
			"clouds" : {
				"all" : 68
			},
			"wind" : {
				"speed" : 3.21,
				"deg" : 255.501
			},
			"rain" : {
				"3h" : 6.83
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-05 18:00:00"
		}, {
			"dt" : 1530824400,
			"main" : {
				"temp" : 289.989,
				"temp_min" : 289.989,
				"temp_max" : 289.989,
				"pressure" : 1009.6,
				"sea_level" : 1029.92,
				"grnd_level" : 1009.6,
				"humidity" : 96,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 501,
				"main" : "Rain",
				"description" : "moderate rain",
				"icon" : "10n"
			} ],
			"clouds" : {
				"all" : 92
			},
			"wind" : {
				"speed" : 3.67,
				"deg" : 247.005
			},
			"rain" : {
				"3h" : 4.96
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-05 21:00:00"
		}, {
			"dt" : 1530835200,
			"main" : {
				"temp" : 289.647,
				"temp_min" : 289.647,
				"temp_max" : 289.647,
				"pressure" : 1010.56,
				"sea_level" : 1030.8,
				"grnd_level" : 1010.56,
				"humidity" : 99,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 501,
				"main" : "Rain",
				"description" : "moderate rain",
				"icon" : "10n"
			} ],
			"clouds" : {
				"all" : 100
			},
			"wind" : {
				"speed" : 3.47,
				"deg" : 295.501
			},
			"rain" : {
				"3h" : 3.82
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-06 00:00:00"
		}, {
			"dt" : 1530846000,
			"main" : {
				"temp" : 289.33,
				"temp_min" : 289.33,
				"temp_max" : 289.33,
				"pressure" : 1010.89,
				"sea_level" : 1031.18,
				"grnd_level" : 1010.89,
				"humidity" : 99,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10n"
			} ],
			"clouds" : {
				"all" : 64
			},
			"wind" : {
				"speed" : 2.82,
				"deg" : 231.011
			},
			"rain" : {
				"3h" : 2.94
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-06 03:00:00"
		}, {
			"dt" : 1530856800,
			"main" : {
				"temp" : 290.614,
				"temp_min" : 290.614,
				"temp_max" : 290.614,
				"pressure" : 1011.5,
				"sea_level" : 1031.74,
				"grnd_level" : 1011.5,
				"humidity" : 97,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 802,
				"main" : "Clouds",
				"description" : "scattered clouds",
				"icon" : "03d"
			} ],
			"clouds" : {
				"all" : 32
			},
			"wind" : {
				"speed" : 2.61,
				"deg" : 237.012
			},
			"rain" : {},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-06 06:00:00"
		}, {
			"dt" : 1530867600,
			"main" : {
				"temp" : 294.89,
				"temp_min" : 294.89,
				"temp_max" : 294.89,
				"pressure" : 1012.16,
				"sea_level" : 1032.26,
				"grnd_level" : 1012.16,
				"humidity" : 90,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 801,
				"main" : "Clouds",
				"description" : "few clouds",
				"icon" : "02d"
			} ],
			"clouds" : {
				"all" : 24
			},
			"wind" : {
				"speed" : 3.33,
				"deg" : 251.501
			},
			"rain" : {},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-06 09:00:00"
		}, {
			"dt" : 1530878400,
			"main" : {
				"temp" : 298.017,
				"temp_min" : 298.017,
				"temp_max" : 298.017,
				"pressure" : 1012.01,
				"sea_level" : 1032.09,
				"grnd_level" : 1012.01,
				"humidity" : 77,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10d"
			} ],
			"clouds" : {
				"all" : 24
			},
			"wind" : {
				"speed" : 2.56,
				"deg" : 264.504
			},
			"rain" : {
				"3h" : 0.009999999999998
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-06 12:00:00"
		}, {
			"dt" : 1530889200,
			"main" : {
				"temp" : 297.535,
				"temp_min" : 297.535,
				"temp_max" : 297.535,
				"pressure" : 1011.73,
				"sea_level" : 1031.88,
				"grnd_level" : 1011.73,
				"humidity" : 75,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10d"
			} ],
			"clouds" : {
				"all" : 36
			},
			"wind" : {
				"speed" : 2.96,
				"deg" : 262.01
			},
			"rain" : {
				"3h" : 0.62
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-06 15:00:00"
		}, {
			"dt" : 1530900000,
			"main" : {
				"temp" : 295.551,
				"temp_min" : 295.551,
				"temp_max" : 295.551,
				"pressure" : 1011.97,
				"sea_level" : 1032.12,
				"grnd_level" : 1011.97,
				"humidity" : 78,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10d"
			} ],
			"clouds" : {
				"all" : 12
			},
			"wind" : {
				"speed" : 1.96,
				"deg" : 276.502
			},
			"rain" : {
				"3h" : 0.7
			},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-06 18:00:00"
		}, {
			"dt" : 1530910800,
			"main" : {
				"temp" : 290.831,
				"temp_min" : 290.831,
				"temp_max" : 290.831,
				"pressure" : 1012.95,
				"sea_level" : 1033.07,
				"grnd_level" : 1012.95,
				"humidity" : 88,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 500,
				"main" : "Rain",
				"description" : "light rain",
				"icon" : "10n"
			} ],
			"clouds" : {
				"all" : 12
			},
			"wind" : {
				"speed" : 1.45,
				"deg" : 208.004
			},
			"rain" : {
				"3h" : 0.17
			},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-06 21:00:00"
		}, {
			"dt" : 1530921600,
			"main" : {
				"temp" : 288.83,
				"temp_min" : 288.83,
				"temp_max" : 288.83,
				"pressure" : 1013.05,
				"sea_level" : 1033.43,
				"grnd_level" : 1013.05,
				"humidity" : 88,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 800,
				"main" : "Clear",
				"description" : "clear sky",
				"icon" : "02n"
			} ],
			"clouds" : {
				"all" : 8
			},
			"wind" : {
				"speed" : 1.81,
				"deg" : 219.008
			},
			"rain" : {},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-07 00:00:00"
		}, {
			"dt" : 1530932400,
			"main" : {
				"temp" : 287.692,
				"temp_min" : 287.692,
				"temp_max" : 287.692,
				"pressure" : 1013.35,
				"sea_level" : 1033.7,
				"grnd_level" : 1013.35,
				"humidity" : 90,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 801,
				"main" : "Clouds",
				"description" : "few clouds",
				"icon" : "02n"
			} ],
			"clouds" : {
				"all" : 24
			},
			"wind" : {
				"speed" : 1.66,
				"deg" : 227.009
			},
			"rain" : {},
			"sys" : {
				"pod" : "n"
			},
			"dt_txt" : "2018-07-07 03:00:00"
		}, {
			"dt" : 1530943200,
			"main" : {
				"temp" : 291.71,
				"temp_min" : 291.71,
				"temp_max" : 291.71,
				"pressure" : 1014.32,
				"sea_level" : 1034.52,
				"grnd_level" : 1014.32,
				"humidity" : 85,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 801,
				"main" : "Clouds",
				"description" : "few clouds",
				"icon" : "02d"
			} ],
			"clouds" : {
				"all" : 20
			},
			"wind" : {
				"speed" : 1.67,
				"deg" : 247.005
			},
			"rain" : {},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-07 06:00:00"
		}, {
			"dt" : 1530954000,
			"main" : {
				"temp" : 296.853,
				"temp_min" : 296.853,
				"temp_max" : 296.853,
				"pressure" : 1014.87,
				"sea_level" : 1034.89,
				"grnd_level" : 1014.87,
				"humidity" : 80,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 802,
				"main" : "Clouds",
				"description" : "scattered clouds",
				"icon" : "03d"
			} ],
			"clouds" : {
				"all" : 32
			},
			"wind" : {
				"speed" : 1.97,
				"deg" : 242.005
			},
			"rain" : {},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-07 09:00:00"
		}, {
			"dt" : 1530964800,
			"main" : {
				"temp" : 300.257,
				"temp_min" : 300.257,
				"temp_max" : 300.257,
				"pressure" : 1014.32,
				"sea_level" : 1034.39,
				"grnd_level" : 1014.32,
				"humidity" : 61,
				"temp_kf" : 0
			},
			"weather" : [ {
				"id" : 800,
				"main" : "Clear",
				"description" : "clear sky",
				"icon" : "01d"
			} ],
			"clouds" : {
				"all" : 0
			},
			"wind" : {
				"speed" : 1.37,
				"deg" : 252.002
			},
			"rain" : {},
			"sys" : {
				"pod" : "d"
			},
			"dt_txt" : "2018-07-07 12:00:00"
		} ],
		"city" : {
			"id" : 2846518,
			"name" : "Rintheim",
			"coord" : {
				"lat" : 49.0122,
				"lon" : 8.4393
			},
			"country" : "DE"
		}
	},
	"uv" : [ {
		"lat" : 49.0129346,
		"lon" : 8.4243022,
		"date_iso" : "2018-07-03T12:00:00Z",
		"date" : 1530619200,
		"value" : 7.27
	}, {
		"lat" : 49.0129346,
		"lon" : 8.4243022,
		"date_iso" : "2018-07-04T12:00:00Z",
		"date" : 1530705600,
		"value" : 7.57
	}, {
		"lat" : 49.0129346,
		"lon" : 8.4243022,
		"date_iso" : "2018-07-05T12:00:00Z",
		"date" : 1530792000,
		"value" : 7.46
	}, {
		"lat" : 49.0129346,
		"lon" : 8.4243022,
		"date_iso" : "2018-07-06T12:00:00Z",
		"date" : 1530878400,
		"value" : 7.12
	}, {
		"lat" : 49.0129346,
		"lon" : 8.4243022,
		"date_iso" : "2018-07-07T12:00:00Z",
		"date" : 1530964800,
		"value" : 8.02
	}, {
		"lat" : 49.0129346,
		"lon" : 8.4243022,
		"date_iso" : "2018-07-08T12:00:00Z",
		"date" : 1531051200,
		"value" : 8.11
	}, {
		"lat" : 49.0129346,
		"lon" : 8.4243022,
		"date_iso" : "2018-07-09T12:00:00Z",
		"date" : 1531137600,
		"value" : 7.49
	}, {
		"lat" : 49.0129346,
		"lon" : 8.4243022,
		"date_iso" : "2018-07-10T12:00:00Z",
		"date" : 1531224000,
		"value" : 7.21
	} ],
	"pollution" : {}
}