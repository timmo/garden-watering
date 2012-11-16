/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.aquanauten.gardenWatering;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.NoSuchElementException;

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
      status.program.status = ProgramStatus.IDLE;
    }
  }

  @GET
  @Path("test")
  @Produces({"text/plain"})
  public String getTest() {
    return "test";
  }

  @POST
  @Path("outlet/{id}/duration/{duration}")
  public void setOutletDuration(@PathParam("id") String outletId, @PathParam("duration") int duration) {
    System.out.println(outletId + ".duration : " + duration);
    Outlet outlet = getOutlet(outletId);
    outlet.duration = duration;
  }

  @POST
  @Path("program/{id}/startTime/{startTime}")
  public void setProgramStartTime(@PathParam("id") String id, @PathParam("startTime") String startTime) {
    Program program = getProgram(id);
    program.startTime = startTime;
  }

  private Program getProgram(String id) {
    return status.program;
  }

  private Outlet getOutlet(String outletId) {
    for (Outlet outlet : status.program.outlets) {
      if (outlet.id.equals(outletId)) {
        return outlet;
      }
    }
    throw new NoSuchElementException(outletId);
  }
}
