#Convert lon lat to APRS syntax
def encodeLonLat(lon,lat,symid,symbol):
    lat_deg = int(abs(lat) // 1)
    lat_min = round(60.*(lat % 1),2)
    nw = "N" if lat >= 0 else "S"
    #lat_result = str(lat_deg).zfill(2) + str(lat_min) + str(nw)
    lat_result = str(lat_deg).zfill(2) + '%05.2f' % lat_min + str(nw)

    lon_deg = int(abs(lon) // 1)
    lon_min = round(60*(lon % 1),2)
    ew = "W" if lon <= 0 else "E"

    lon_result = str(lon_deg).zfill(3) + '%05.2f' % lon_min + ew

    return lat_result + symid + lon_result + symbol
    
    
t1 =  encodeLonLat(13.837965,52.52417833,"/","-")
print t1 + " " + str(t1 == "5231.45N/01350.28E-")


t1 = encodeLonLat(0.0,0.0,"/","-")
print t1 + " " + str(t1 == "0000.00N/00000.00W-")


t1 = encodeLonLat(1.5,1.5,"/","-")
print t1 + " " + str(t1 == "0130.00N/00130.00E-")
