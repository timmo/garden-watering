/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.aquanauten.gardenWatering;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import java.util.Collection;

import static java.util.Arrays.asList;

@Path("/service")
@Produces({"application/json", "application/xml"})
public class Servlet {

  @Inject
  ProgramFactory programFactory;

  public Servlet() {
    System.out.println("Servlet");
  }

  @GET
  @Path("outlet/{id}")
  public Outlet getOutlet(@PathParam("id") String id) {
    return new Outlet("bla");
  }

  @GET
  @Path("test")
  public String getTest() {
    return "test";
  }

  @GET
  @Path("programs")
  @Produces({"application/json", "application/xml"})
  public Collection<Program> getPrograms() {
    Program program = programFactory.createProgram(0);
    return asList(program);
  }
}
