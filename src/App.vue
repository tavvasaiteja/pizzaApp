<template>
<div id="app">
      <h1 align="center">Pizza App Interview Task</h1><hr>

    <b-tabs content-class="mt-3" align="center">    
      <b-tab title="Received Orders" active>
        <b-card border-variant="primary" no-body v-for ="(item,index) in receivedOrders" :key="item.orderId" class="card">
            <b-tabs pills card>
              <b-tab title="Order Info" active>
                <b-card-text>
                  <p id="hide">{{index}}</p>
                  <p><span class ="left"> OrderId :</span><span class="right">{{item.orderId}}</span></p>
                  <p><span class ="left">No Of Items :</span><span class="right">{{item.Items}}</span></p>
                  <p><span class ="left">Order Value :</span><span class="right">{{item.orderValue}}</span></p>
                  <p><span class ="left">Order Date :</span><span class="right">{{item.orderedDate}}</span></p>
                  <p><span class ="left">Order Status :</span><span class="right">{{item.orderStatus}}</span></p><br>
                  <div v-if="item.orderStatus== 'received'">
                  <b-button size="sm" v-on:click="makePending(item,index)"> Make Pending </b-button>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Customer Info">
                <b-card-text>
                  <p><span class ="left">Customer Name :</span><span class="right">{{item.customerName}}</span></p>
                  <p><span class ="left">Contact :</span><span class="right">{{item.contactNumber}}</span></p>
                  <p><span class ="left">Payment Type :</span><span class="right">{{item.paymentType}}</span></p>
                </b-card-text>
              </b-tab>
            </b-tabs>       
        </b-card>  
      </b-tab>

      <b-tab title="Pending Orders">
        <b-card border-variant="warning" no-body v-for ="(item,index) in pendingOrders" :key="item.orderId" class="card">
            <b-tabs pills card>
              <b-tab title="Order Info" active>
                <b-card-text>
                  <p>{{index}}</p>
                  <p><span class ="left">OrderId :</span><span class="right">{{item.orderId}}</span></p>
                  <p><span class ="left">No Of Items :</span><span class="right">{{item.Items}}</span></p>
                  <p><span class ="left">Order Value :</span><span class="right">{{item.orderValue}}</span></p>
                  <p><span class ="left">Order Date :</span><span class="right">{{item.orderedDate}}</span></p>
                  <p><span class ="left">Order Status :</span><span class="right">{{item.orderStatus}}</span></p><br>
                  <div v-if="item.orderStatus== 'pending'">
                  <b-button size="sm" v-on:click="makeDelivered(item,index)"> Make Delivered </b-button>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Customer Info">
                <b-card-text>
                  <p><span class ="left">Customer Name :</span><span class="right">{{item.customerName}}</span></p>
                  <p><span class ="left">Contact :</span><span class="right">{{item.contactNumber}}</span></p>
                  <p><span class ="left">Payment Type :</span><span class="right">{{item.paymentType}}</span></p>
                </b-card-text>
              </b-tab>
            </b-tabs>       
        </b-card>  
      </b-tab>

      <b-tab title="Delivered Orders">
        <b-card border-variant="success" no-body v-for ="(item,index) in deliveredOrders" :key="item.orderId" class="card">
            <b-tabs pills card>
              <b-tab title="Order Info" active>
                <b-card-text>
                  <p id="hide">{{index}}</p>
                  <p><span class ="left">OrderId :</span><span class="right">{{item.orderId}}</span></p>
                  <p><span class ="left">No Of Items :</span><span class="right">{{item.Items}}</span></p>
                  <p><span class ="left">Order Value :</span><span class="right">{{item.orderValue}}</span></p>
                  <p><span class ="left">Order Date :</span><span class="right">{{item.orderedDate}}</span></p>
                  <p><span class ="left">Order Status :</span><span class="right">{{item.orderStatus}}</span></p><br>
                  <div v-if="item.orderStatus=='pending'">
                  <b-button size="sm" v-on:click="makeDelivered(item,index)"> Make Delivered </b-button>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Customer Info">
                <b-card-text>
                  <p><span class ="left">Customer Name :</span><span class="right">{{item.customerName}}</span></p>
                  <p><span class ="left">Contact :</span><span class="right">{{item.contactNumber}}</span></p>
                  <p><span class ="left">Payment Type :</span><span class="right">{{item.paymentType}}</span></p>
                </b-card-text>
              </b-tab>
            </b-tabs>       
        </b-card>  
      </b-tab>
    </b-tabs>

</div>
</template>

<script>

import info from './assets/sample.json';

export default{
  name:'App',
  data(){
    return {
      info,
      receivedOrders:{},
      pendingOrders:{},
      deliveredOrders:{}

    }
  },
  created(){
    this.receivedOrders = this.info.filter(i=>{
      return i.orderStatus == 'received';
    }),
    console.log("logging receivedOrders",this.receivedOrders);
  
    this.pendingOrders = this.info.filter(i=>{
      return i.orderStatus == 'pending';
    }),
    console.log("logging pending orders",this.pendingOrders);

    this.deliveredOrders = this.info.filter(i=>{
      return i.orderStatus == 'delivered';
    })
    console.log("logging delivered orders",this.deliveredOrders);

        
  },
  methods:{
      makePending:function(item,index){
      item.orderStatus = 'pending';
      this.pendingOrders.push(item);
      this.receivedOrders.splice(index,1);
      console.log('new pending orders',this.pendingOrders);

    },
      makeDelivered:function(item,index){
      item.orderStatus = 'delivered';
      this.deliveredOrders.push(item);
      this.pendingOrders.splice(index,1);
      console.log('new delivered orders',this.deliveredOrders);

    }
  }
}
</script>

<style>
.card{
  width:20%;
  margin:20px;
  min-height:100px;
  float:left;
  min-height:250px;
}
p{
  margin-bottom:0px !important;
}
.left{
  font-weight:bold;
}
.right{
  margin-left:10px;
}
</style>
