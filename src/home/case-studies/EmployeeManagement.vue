<template>
<div>
<div>
    
    <img :src="require('assets/img/bg-employeemngmt.jpg')">
    <h1>Employee Management</h1>
    <h2>Starting Price: $7,000</h2>
    <div class="container">
        <a  href="https://calendly.com/incrementtech2020" type="button" class="btn btn-success custom">Inquire Now!</a>

    </div>
    
    
    <p id="text">The Employee Management System maintains the professional and personal details of the employees as well as the company itself, in an organized manner. It’s importance to the company is that it manages and lowers the burden or even pressure on the Human Resource Department and Business Managers. This does not just benefit the established companies, but also those who are managing their business alone, with a starting number of workforce; since start-up business needs to be taken care and monitored in order for it to expand.</p>
    <p id="text1">Building an ecommerce website for your business is an important piece for your ecommerce strategy; making it easy for customers to visit you and avail of the products you offer to them. Increment Technologies Inc., develops an ecommerce website application with the basic features such as account management, product features, payment methods, locations, and other plugin features that you can integrate or add up for the qualifications of your website, wherein Increment can definitely deliver.</p>
    
    
    <br>
    <br>
    <br>   
</div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
img{
    height: 600px;
    width: 100%;
    

}
#text{
    margin-top: 130px;
    margin-left: 115px;
    margin-right: 115px;
    font-size: 16px;
}
#text1{
    margin-top: 30px;
    margin-left: 115px;
    margin-right: 115px;
    font-size: 16px;

}

h1{
    color: white;
    margin-top: 150px;
    position: absolute;
    left: 25%;
    right: 25%;
    top: 98px;
    /* font-family: Open Sans; */
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 68px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
}
h2{
    position: absolute;
    width: 329px;
    height: 34px;
    left: 37%;
    top: 320px;
    /* margin-top: 115px; */
    font-style: normal;
    font-size: 30px;
    line-height: 41px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;

}
.btn-success {
    color: #fff;
    background-color: #00E68A;
    box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
    border-radius:10px;
    outline: none;
    border: 0px;
    
}
.btn {
    display: inline-block;
    font-weight: 400;
    margin-top: 180px;
    margin-left: 43%;

}
.container{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.custom:hover{
    background-color: #00E68A !important;
}

</style>