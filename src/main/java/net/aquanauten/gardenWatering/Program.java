package net.aquanauten.gardenWatering;

import javax.persistence.Id;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.Collection;

import static net.aquanauten.gardenWatering.ProgramStatus.IDLE;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
class Program {

  @Id
  String id;
  ProgramStatus status = IDLE;
  String startTime;
  Collection<Outlet> outlets = new ArrayList<Outlet>();

  Program() {
    id = "Default";
    outlets.add(new Outlet("Front Yard 1"));
    outlets.add(new Outlet("Front Yard 2"));
    outlets.add(new Outlet("Back Yard"));
  }

  Program(String id) {
    this();
    this.id = id;
  }
}
