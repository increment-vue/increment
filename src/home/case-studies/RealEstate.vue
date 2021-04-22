<template>
<div>
<div>
    
    <img :src="require('assets/img/bg-payroll.jpg')">
    <h1>Real Estate</h1>
    <h2>Starting Price: $7,000</h2>
    <div class="container">
        <a  href="https://calendly.com/incrementtech2020" type="button" class="btn btn-success custom">Inquire Now!</a>

    </div>
    
    
    <p id="text">Company profiling is very important especially when your goal to your business is to increase your online presence. In the Real Estate Industry, a company website is a must; considering this modernized era, a modern real estate firm should also adapt to the modern way of commercializing properties. According to G.B. Davis from LendingHome, from house flipping to wholesaling, commercial investing to rental investing, the best real estate investment software options target one niche and excel within it - Marketing. Valuing this investment, a real estate software can help you plugin rent and income data to come up with approximate property valuation. </p>
    <p id="text1">Increment Technologies can help you not just in company profiling but as well as organizing the inflow of information within your website, such as income data, rent data, appointment setting, and we can also add features such as online rent collection, allowing tenants to pay by electronic transfer that can automatically track all your income and as well tracking tenants who have not paid on their due date. You can even add features you’d like exclusively for your own real estate software. This will create an opportunity for you to save more when it comes to manpower and document storage. We, at Increment Technologies will help you succeed in your business. </p>
    
    
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
    left: 38%;
    right: 38%;
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