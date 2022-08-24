const passenger_name = document.getElementById('complete_name');
const genera_button = document.getElementById('genera');
const tot_km = document.getElementById('trip_km');
const selcted_age = document.getElementById('options');
const costo_per_km = 0.21;



genera_button.addEventListener('click',
    function () {
        const km = tot_km.value;
        const age = selcted_age.value;
        let costo_tot = costo_per_km * km;

        alert(age);

        if (age == 'minorenne') {
            costo_tot = costo_tot - (costo_tot * 0.2);
        }

        else if (age == 'over') {
            costo_tot = costo_tot - (costo_tot * 0.4);
        }

        alert("il costo totale per la persona di età " + age + " che percorre " + km + "km è di " + costo_tot.toFixed(2) + "euro");

    }
);


