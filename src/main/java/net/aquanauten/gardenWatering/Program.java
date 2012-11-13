package net.aquanauten.gardenWatering;

import javax.persistence.Id;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.Collection;

import static net.aquanauten.gardenWatering.ProgramStatus.PROGRAMED;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
class Program {

  @Id
  String id;
  ProgramStatus status = PROGRAMED;
  String startTime;
  Collection<Outlet> outlets = new ArrayList<Outlet>();

  Program() {
    outlets.add(new Outlet("Front Yard"));
    outlets.add(new Outlet("Back Yard"));
  }

  Program(String id) {
    this();
    this.id = id;
  }
}
