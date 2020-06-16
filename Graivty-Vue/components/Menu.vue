<template>
<header class="menu">
    <ul class="nav-items">
        <div></div>
        <li v-for="page in pages" 
        :key="page.text"
        >
            <nuxt-link  @click.native="activeNavLink()" :class="{active: page.active}" :to=page.path>{{ page.text}}</nuxt-link>
        </li>
        <div></div>
    </ul>
</header>
</template>

<script>

export default {
    data()  {
        return{
        pages: [{
            text: "Home",
            path: "/",
            active: false
        },
        {
            text: "Constilations",
            path: "/Constilations",
            active: false
        },
        {
            text: "Galaxies",
            path: "/Galaxies",
            active: false
        },
        {
            text: "Nebulae",
            path: "/Nebulae",
            active: false
        },
        {
            text: "Stars",
            path: "/Stars",
            active: false
        }
        ]
        }
    },    
    mounted() {
            this.activeNavLink();
        },
    methods: {
        activeNavLink () {
            this.pages.forEach(element => {
                if (element.path === this.$route.path) {
                        element.active = true
                }
                else element.active = false
            });
        }
    }   
}
</script>

<style scoped>

.menu{
   height: 50px; 
   width: 100%;
   background-color: rgb(75, 75, 75);
   display: 'flex';
   justify-content: center;
   align-items: center;
}

.nav-items{
    list-style: none;
    padding: 12px;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
}

li a{
    color:rgb(255, 255, 255);
    text-decoration: none;
    padding: 13px 20px 14px 20px;
}

li a:hover:not(.active){
    background-color:rgb(123, 56, 185);
    border-bottom: 2px solid white;
}

.active{
    padding: 13px 20px 14px 20px;
    background-color:rgb(123, 56, 185);
    border-bottom: 2px solid white;
}
</style>