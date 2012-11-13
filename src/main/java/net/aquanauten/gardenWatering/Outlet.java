/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.aquanauten.gardenWatering;

import javax.persistence.Id;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;

import static net.aquanauten.gardenWatering.OutletStatus.CLOSED;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Outlet implements Serializable {

  @Id
  String id;
  int duration = 10;
  OutletStatus status = CLOSED;

  public Outlet() {
  }

  public Outlet(String id) {
    this.id = id;
  }
}
