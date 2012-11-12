
Kickstart with maven and jetty / jersey by typing the following in your console:

    > mvn compile
    > mvn jetty:run-exploded



Status Query
------------

GET http://localhost:80/status

**Response**

    {
        time : "21:10"
        program : {
            startTime : "21:00",
            status : "running",
            outlets : [
                { id : "1", name : "Outlet 1", duration : 20, remaining : 10, status : "open" },
                { id : "2", name : "Outlet 2", duration : 20, remaining : 20, status : "closed" },
                { id : "3", name : "Outlet 3", duration : 20, remaining : 20, status : "closed" }
            ]
        }
    }


Update Outlet
-------------

POST http://localhost:80/outlet/1?duration=20
POST http://localhost:80/outlet/1?command=open
POST http://localhost:80/outlet/1?command=close

Update Program
--------------

POST http://localhost:80/program?startTime=21:00
POST http://localhost:80/program?command=startNow
POST http://localhost:80/program?command=stopNow

