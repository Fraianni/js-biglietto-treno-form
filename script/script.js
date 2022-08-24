const passenger_name = document.getElementById('complete_name');
const genera_button = document.getElementById('genera');
const tot_km = document.getElementById('trip_km');
const selcted_age = document.getElementById('options');
const costo_per_km = 0.21;





genera_button.addEventListener('click',
    function () {
        const km = tot_km.value;
        const age = selcted_age.value;
        const name = passenger_name.value;
        let costo_tot = costo_per_km * km;

        const generated_promo = document.querySelector('.offerta');

        if (isNaN(km)) {
            alert('Inserire numericamente i km')
        }
        else {
            if (age == 'minorenne') {
                costo_tot = costo_tot - (costo_tot * 0.2);
                generated_promo.innerHTML += 'Tariffa ridotta del 20%';
            }

            else if (age == 'over') {
                costo_tot = costo_tot - (costo_tot * 0.4);
                generated_promo.innerHTML += 'Tariffa ridotta del 40%';

            }

            else {
                generated_promo.innerHTML += 'Tariffa standard';

            }

            const generated_name = document.querySelector('.pass_name');
            generated_name.innerHTML += name;

            const num_carrozza = document.querySelector('.numero_carrozza');
            num_carrozza.innerHTML += Math.floor((Math.random() * 9) + 1)

            alert("il costo totale per " + name + costo_tot.toFixed(2) + "euro");
        }



    }
);





