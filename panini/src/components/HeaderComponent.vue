<template>
    <MDBNavbar expand="lg" dark bg="dark" container position="sticky">
        <MDBNavbarBrand href="#">Panini</MDBNavbarBrand>
        <MDBNavbarToggler @click="collapse1 = !collapse1" target="#navbarSupportedContent"></MDBNavbarToggler>
        <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
            <MDBNavbarNav class="mb-2 mb-lg-0" center>
                <MDBNavbarItem :to="{ path: '/', hash: '#home' }" v-bind:active="activeRoute === 'home'">Home</MDBNavbarItem>
                <MDBNavbarItem
                    :to="{ path: '/', hash: '#monte-seu-kit-view' }"
                    v-bind:active="activeRoute === 'monte-seu-kit-view'"
                >Monte seu Kit</MDBNavbarItem>
                <MDBNavbarItem :to="{ path: '/', hash: '#kits-view' }" v-bind:active="activeRoute === 'kits-view'">Kits prontos</MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav class="mb-2 mb-lg-0 mr-5 px-3">
                <MDBNavbarItem to="#" class="me-3 me-lg-0">
                    <MDBIcon icon="shopping-cart"></MDBIcon>
                </MDBNavbarItem>
            </MDBNavbarNav>
            <template v-if="isUserLoggedIn">
                <MDBDropdown class="nav-item" v-model="dropdown6">
                    <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown6 = !dropdown6">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).webp"
                            class="rounded-circle"
                            height="22"
                            alt
                            loading="lazy"
                        />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                        <MDBDropdownItem href="#">Meu perfil</MDBDropdownItem>
                        <MDBDropdownItem href="#">Configurações</MDBDropdownItem>
                        <MDBDropdownItem href="#" @click="logout">Sair</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </template>
            <template v-else>
                <MDBNavbarNav class="d-flex flex-row" right>
                    <MDBBtn size="sm" color="secondary">Login</MDBBtn>
                </MDBNavbarNav>
            </template>
        </MDBCollapse>
    </MDBNavbar>
</template>

<script>
import {
    MDBIcon,
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
    components: {
        MDBIcon,
        MDBBtn,
        MDBNavbar,
        MDBNavbarToggler,
        MDBNavbarBrand,
        MDBNavbarNav,
        MDBNavbarItem,
        MDBCollapse,
        MDBDropdown,
        MDBDropdownToggle,
        MDBDropdownMenu,
        MDBDropdownItem,
    },
    setup() {
        const collapse1 = ref(false);
        const dropdown1 = ref(false);
        const dropdown6 = ref(false);
        return {
            collapse1,
            dropdown1,
            dropdown6,
        };
    },
    data: () => ({
        isUserLoggedIn: true,
        activeRoute: 'Home'
    }),
    methods: {
        logout() {
            this.isUserLoggedIn = false;
        },
        goTo(route) {
            this.$router.push(route);
        },
        setActiveRoute() {
            this.activeRoute = this.$route.hash.replace('#', '');
        }
    },
};
</script>
