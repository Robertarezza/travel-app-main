<script>
import axios from "axios";

export default {};
</script>

<template>
  <div class="container">
    <div
      class="container"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
      "
    >
      <div class="">
        <h1>Esplora il Mondo a Modo Tuo!</h1>
       
        <p>
          Pianifica i tuoi viaggi, scopri nuove destinazioni e crea ricordi
          indimenticabili con la nostra Travel App interattiva.
        </p>
      </div>
      <div>
        <img src="/src/assets/img/viaggio.svg" alt="" style="" class="img1" />
      </div>
    </div>

    <!-- //freccie -->
    <div
      class="container freccia1"
      style="display: flex; justify-content: center; margin-top: 40px"
    >
      <img src=" /src/assets/img/linea.svg" alt="" class="rotated-image" />
    </div>

    <div
      class="container freccia2"
      style="display: flex; justify-content: center; margin-left: 0.5px; margin-top:40px;"
    >
      <img src=" /src/assets/img/lineacurva.svg" alt="" class="rotated-image2" />
    </div>
    <!-- //freccie -->
   
   
    <div
      class="container"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
      "
    >
      <img src="/src/assets/img/scatta.svg" alt="" style="width: 50%" class="img2"/>
      <div>
      <h3>Racconta il Tuo Viaggio</h3>
      <p>
        Crea un diario visivo del tuo viaggio caricando le tue foto preferite in ogni
        tappa!
      </p>
      </div>
     
    </div>
    <!-- //freccie -->
    <div
      class="container"
      style="display: flex; justify-content: center; margin-top: 40px; margin-left: 0.5px"
    >
      <img src=" /src/assets/img/linea.svg" alt="" class="rotated-image3" />
    </div>

    <div
      class="container"
      style="display: flex; justify-content: center; margin-top: 20px"
    >
      <img src=" /src/assets/img/lineacurva.svg" alt="" class="rotated-image4" />
    </div>
    <!-- //freccie -->

    <div
      class="container"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
      "
    >
    <div>
    <h3>Scopri e Conserva i Tuoi Ricordi di Viaggio</h3>
      <p>
        Trova e Salva i Luoghi che Ami Utilizza la nostra mappa interattiva per cercare,
        aggiungere e salvare i tuoi luoghi preferiti con un semplice clic.
      </p>
    </div>
      <img src="/src/assets/img/trova.svg" alt="" style="" class="img3"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img1 {
    width: 70%
}

.img3 {
    width: 50%
}



.rotated-image {
  transform: rotate(141deg);
  margin-top: 40px;
  width: 20%;
}
.rotated-image2 {
  transform: rotate(161deg);
  margin-top: 50px;
  width: 20%;
  margin-right: 333px;
  margin-top: 100px;
}
.rotated-image3 {
  transform: rotate(37deg);
  margin-top: 60px;
  width: 20%;
}
.rotated-image4 {
  transform: rotate(106deg);
  margin-top: 88px;
  width: 20%;
  margin-bottom: 40px;
  margin-left: 185px;
}


@media (max-width: 768px) {

    .freccia2{
        display: flex; 
        justify-content: center; 
        margin-top: 0 !important;
        width: 100%;
    }

    .rotated-image2{
        transform: rotate(137deg);
        width: 34%;
        margin-left: -109px;
        margin-top: 66px;
        margin-right: 0;
    }

    .rotated-image {
    transform: rotate(141deg);
    margin-top: -16px;
    width: 31%;
    }

    h3 {
        font-size: 1rem;
    }
    .img2 {
        margin-right: 5px;
    }

    .img1 {
        width: 100%;
    }

    .rotated-image3 {
        transform: rotate(126deg);
        margin-top: 60px;
        width: 31%;
    }


    .rotated-image4 {
        transform: rotate(106deg);
    margin-top: 52px;
    width: 34%;
    margin-bottom: 40px;
    margin-left: 0;
}
    }



    @media (max-width: 425px) {
        .freccia2{
        display: flex; 
        justify-content: center; 
        margin-top: 0 !important;
        width: 100%;
    }

    .rotated-image2{
        transform: rotate(137deg);
        width: 34%;
        margin-left: -109px;
        margin-top: 66px;
        margin-right: 0;
    }

    .rotated-image {
    transform: rotate(141deg);
    margin-top: -16px;
    width: 31%;
    }

    h3 {
        font-size: 1rem;
    }

    .img2 {
        margin-right: 5px;
    }
    .img1 {
        width: 100%;
    }
    .rotated-image3 {
        transform: rotate(126deg);
        margin-top: 60px;
        width: 31%;
    }


    .rotated-image4 {
        transform: rotate(106deg);
    margin-top: 52px;
    width: 34%;
    margin-bottom: 40px;
    margin-left: 0;
}
    }

</style>
