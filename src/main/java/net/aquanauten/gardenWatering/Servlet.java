/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.aquanauten.gardenWatering;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import static org.apache.commons.lang.StringUtils.isBlank;

@Path("/")
public class Servlet {

  final static Status status = new Status();

  @GET
  @Path("status")
  @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
  public Status getStatus() {
    return status;
  }

  @POST
  @Path("program")
  public void program(@QueryParam("command") String command) {
    if (isBlank(command)) {
      return;
    }
    command = command.trim().toUpperCase();
    if (Command.RUN.toString().equals(command)) {
      status.program.status = ProgramStatus.RUNNING;
    }

    if (Command.STOP.toString().equals(command)) {
      status.program.status = ProgramStatus.PROGRAMED;
    }
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
