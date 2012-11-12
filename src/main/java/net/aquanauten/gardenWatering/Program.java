package net.aquanauten.gardenWatering;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.Collection;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
class Program {

  int id = 0;
  boolean enabled = true;
  Hour startTime;
  Collection<Outlet> outlets = new ArrayList<Outlet>();
}
