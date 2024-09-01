<script>
    export default {

    }
</script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container d-flex justify-content-beetwen">
            <a class="navbar-brand" href="#">
                <img src="/src/assets/img/logo.png" alt="Bootstrap" width="200" height="60">
            </a>
        
            <ul class="d-flex g-3" style="">
          <li class="me-3 element-text2"
            style="">
            <router-link :to="{ name: 'home' }" class="nav-link p-3"
              >Home Page</router-link>
          </li>
          <li class="me-3 element-text2"
            style="">
            <router-link :to="{ name: 'map' }" class="nav-link p-3"
              >Crea il tuo Viaggio</router-link>
          </li>
          <li class="me-3 element-text2"
            style="">
            <router-link :to="{ name: 'listmap' }" class="nav-link p-3"
              >Il tuo viaggio</router-link>
          </li>
          
        </ul>
        </div>
    </nav>
</template>

<style scoped lang="scss">

* {
    font-family: "Dancing Script", cursive;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
}

ul{
    text-decoration: none;
    list-style-type: none;
    color: #359cd8;
    margin-top: 15px;
}
@media (max-width: 425px) {

    .navbar {
        .container {
            justify-content: center;
        }
        }

        ul {
            margin: 0;
            padding: 0;

            li{
                margin: 0 !important;
            }
        }
    }


        @media (max-width: 480px) {

.navbar {
    .container {
        justify-content: center;
    }
    }  
    ul {
            margin: 0;
            padding: 0;

            li{
                margin: 0 !important;
            }
        }
}
</style>