<template>
    <div class="container-fluid main-card">
        <div class="row">
            <div class="container-fluid upper-container">
                <div class="row">
                    <div class="col-md-2"/>
                    <div class="col-md-8 center-text">
                        <h1>LOREHEI</h1>
                    </div>
                    <div class="col-md-2"/>
                </div>
                <div class="row">
                    <div class="col-md-2"/>
                    <div class="col-md-8 center-text">
                        <h2>Boa companhia, sorte e alegria.</h2>
                    </div>
                    <div class="col-md-2"/>
                </div>
                <div class="row img-row">
                    <div class="col-md-2"/>
                    <div class="col-md-8 center-text">
                        <img src="/lorehei.png" alt="lorehei" class="img-fluid"/>
                    </div>
                    <div class="col-md-2"/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container-fluid list-container">
                <div class="row">
                    <div class="col-md-12 p-0">
                        <MenuList :itens="itens" :onItemClick="itemClick" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row meditation-row">
            <div class="col-md-12 meditation-col">
                <img
                    class="chaosphere"
                    src="/caosfera.png"
                    @click="chaosphereClicked"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="@/components/MainCard.ts"></script>

<style scoped src="@/styles/MainCard.css"></style>
  