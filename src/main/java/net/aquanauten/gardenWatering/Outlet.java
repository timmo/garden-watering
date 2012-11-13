/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.aquanauten.gardenWatering;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Outlet implements Serializable {

    String name;
    int duration;
    OutletStatus status;
    String id;

    public Outlet() {
    }

    public Outlet(String name) {
        this.name = name;
    }
}
