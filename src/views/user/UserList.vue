<template>
  <div class="home">
    <div class="page-wrapper">
        
        <!-- MENU SIDEBAR-->
        <SiderNavBar></SiderNavBar>
        <!-- END MENU SIDEBAR-->

        <!-- PAGE CONTAINER-->
        <div class="page-container">
            <!-- HEADER DESKTOP-->
            <HeaderBar></HeaderBar>
            
            <!-- END HEADER DESKTOP-->

            <!-- MAIN CONTENT-->
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div>User List</div>

                    <!-- content -->




                    </div>
                </div>
            </div>
        </div>
        <!-- END PAGE CONTAINER-->

    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue'
import SiderNavBar from '@/components/SiderNavBar.vue'

export default {
  name: 'Home',
  components: {
    HeaderBar,
    SiderNavBar
  }
}
</script>
