# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import requests
import json
import datetime
# import matplotlib.pyplot as plt
# import matplotlib.dates as mdates
# import numpy as np
import grequests

#change access_token as needed
access_token = "fOMjYZGCxkPjfJ4iWH2DdQJFeeFm"
bearer_token = "Bearer " + access_token

#test url feel free to erase later
url = "https://test.api.amadeus.com/v1/shopping/flight-offers?origin=BOS&destination=BWI&departureDate=2018-10-20&adults=1&nonStop=false&currency=USD"

now = datetime.datetime.now()
current_date = str(now.year) + "-" + str(now.month) + "-" + str(now.day)

url_start = "https://test.api.amadeus.com/v1/shopping/flight-offers?"

origin = "BOS"
destination = "BWI"
departureDate = "2018-09-15"
adults = "1"
nonStop = "false"
currency = "USD"
maxFlights = "1"
query = "origin=" + origin + "&destination=" + destination + "&departureDate="\
         + departureDate +  "&adults=" + adults + "&currency=" + currency +\
         "&max=" + maxFlights

url = url_start + query

#travelClass = "ECONOMY"

#function mostly used to test whether authorization token is still valid
def callMyApi():
  print ("Calling API ...")
  response = requests.get(url,headers={'Authorization': bearer_token})
  print (response.text)
  return response

#gets access token given api_key and api_secret
def getAccessToken(api_key, api_secret):
    url_start = "https://test.api.amadeus.com/v1/security/oauth2/token"
    url = url_start
    data = {"grant_type": "client_credentials", "client_id" : api_key, \
            "client_secret" : api_secret}
    return json.loads(requests.post(url, data).text)['access_token']
    
#Returns list of dates and list of flights for those dates from origin airport
#to the destination airport for next num_of_days. Also prints a plot, but erase
#later.
def returnLowestPrices(origin, destination, access_token, num_of_days = 100):
    bearer_token = "Bearer " + access_token
    returnList = []
    returnList.append([])
    returnList.append([])
    now = datetime.datetime.now()
    departureDate = now.strftime('%Y-%m-%d')
    adults = "1"
    currency = "USD"
    maxFlights = "1"
    url_start = "https://test.api.amadeus.com/v1/shopping/flight-offers?"
    urls = []
    for i in range(0, num_of_days):
        print(departureDate)
        query = "origin=" + origin + "&destination=" + destination + "&departureDate="\
         + departureDate +  "&adults=" + adults + "&currency=" + currency +\
         "&max=" + maxFlights
        urls.append(url_start + query)
        now += datetime.timedelta(days=1)
        departureDate = now.strftime('%Y-%m-%d')
        
    requests = (grequests.get(url, headers = {'Authorization': bearer_token}) for url in urls)
    results = grequests.map(requests)
    for i in range(0, num_of_days):
        
    
        flight_data = json.loads(results[i].text)
        try:
            total = flight_data['data'][0]['offerItems'][0]['price']['total']
        except:
            total = '0.00'
        returnList[0].append(now)
        returnList[1].append(float(total))
        now += datetime.timedelta(days=1)
        departureDate = now.strftime('%Y-%m-%d')
    
    # plt.gca().xaxis.set_major_formatter(mdates.DateFormatter('%m/%d/%Y'))
    # plt.gca().xaxis.set_major_locator(mdates.DayLocator())
    # plt.plot(returnList[0], returnList[1])
    #plt.gcf().autofmt_xdate()
    return returnList

returnLowestPrices(origin, destination, 5)

#callMyApi()




#json_data['data'][2]['offerItems'][0]['price']['total']