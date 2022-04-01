<template>
    <MDBNavbar expand="lg" dark bg="dark" container>
        <MDBNavbarBrand href="#">Panini</MDBNavbarBrand>
        <MDBNavbarToggler @click="collapse1 = !collapse1" target="#navbarSupportedContent"></MDBNavbarToggler>
        <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
            <MDBNavbarNav class="mb-2 mb-lg-0" center>
                <MDBNavbarItem to="#" v-bind:active="activeRoute === 'Home'">Home</MDBNavbarItem>
                <MDBNavbarItem href="#" v-bind:active="activeRoute === 'Paes'">Pães</MDBNavbarItem>
                <MDBNavbarItem href="#" v-bind:active="activeRoute === 'Kits'">Kits prontos</MDBNavbarItem>
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
                <MDBNavbarNav class="mb-2 mb-lg-0" right>
                    <MDBBtn size="sm" color="secondary">Login</MDBBtn>
                </MDBNavbarNav>
            </template>
        </MDBCollapse>
    </MDBNavbar>
</template>

<script>
import {
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
    MDBDropdownItem
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';
export default {
    components: {
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
        MDBDropdownItem
    },
    setup() {
        const collapse1 = ref(false);
        const dropdown1 = ref(false);
        const dropdown6 = ref(false);
        return {
            collapse1,
            dropdown1,
            dropdown6
        }
    },
    props: {
        activeRoute: {
            type: String,
            default: "Home"
        }
    },
    data: () => ({
        isUserLoggedIn: true
    }),
    methods: {
        logout() {
            this.isUserLoggedIn = false;
        }
    }
};
</script>