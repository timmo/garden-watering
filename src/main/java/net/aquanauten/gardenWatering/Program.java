package net.aquanauten.gardenWatering;

import javax.xml.bind.annotation.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@XmlAccessorType(XmlAccessType.FIELD)
class Program {

    int id = 0;
    boolean enabled = true;
    Hour startTime;
    Outlet[] outlets = new Outlet[1];

    Program() {
        Outlet outlet = new Outlet();
        outlet.name = "Outlet (I)";
        outlet.duration = 33;
        outlet.status = OutletStatus.OPEN;
        outlet.id = "1";
        outlets[0] = outlet;
    }
}
