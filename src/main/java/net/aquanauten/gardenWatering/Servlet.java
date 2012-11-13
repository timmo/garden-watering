/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.aquanauten.gardenWatering;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/")
public class Servlet {

  public Servlet() {
    System.out.println("Servlet");
  }

  @GET
  @Path("status")
  @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
  public Status getStatus() {
    return new Status();
  }

  @GET
  @Path("test")
  @Produces({"text/plain"})
  public String getTest() {
    return "test";
  }

//  @GET
//  @Path("outlet/{id}")
//  public Outlet getOutlet(@PathParam("id") String id) {
//    return new Outlet("bla");
//  }
}
