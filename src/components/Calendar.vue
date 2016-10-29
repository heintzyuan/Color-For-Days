<template>
<!--header-->
<div class="color-for-calendar">
  <div class="color-for-calendar-header">
    <div class="lt-header">
      <div class="prev-month" >
<a class="pm" @click.stop="monthBack">{{last}}</a>
      </div>
      <div class="title">choose</div>
      <div class="next-month">
      
      <a class="nm" @click.stop="monthForward">{{next}}</a>
      </div>
    </div>
  </div>
<!--body-->
<div class="color-for-calendar-body">
<div class="calendar-weeks">
      <div class="week" v-for="week in weekNames">{{week}}</div>
    </div>
<div class="dates">
      <div calss="dates-bg">
        <div class="week-row" v-for="week in currentDates">
          <div class="day-cell" v-for="day in week"
            :class="{'today' : day.isToday,
              'not-cur-month' : !day.isCurMonth}">
            <p class="day-number">{{day.monthDay}}</p>
          </div>
        </div>
      </div>








</div>
</template>



<script>
export default {
data: function() {
      return {
        last: '<',
        next: '>',
weekNames:['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'],
currentDate : new Date(),
firstDay : 0
       
}
},

computed : {
      currentDates: function() {
        return this.getCalendar()
      }
    },

methods:{
  monthBack: function() {
        this.currentDate = this.changeMonth(this.currentDate, -1)
       
      },
      monthForward: function() {
        this.currentDate = this.changeMonth(this.currentDate, 1)
        
      },
      changeMonth: function(date, num) {
        let dt = new Date(date)
        return new Date(dt.setMonth(dt.getMonth() + num))
      },
      

	getStartDate: function(date) {
return new Date(date.getFullYear(), date.getMonth(), 1)
  },

getCalendar: function() {
        // calculate 2d-array of each month
        // first day of this month
        let now = new Date() // today
        let current = new Date(this.currentDate)

        let startDate = this.getStartDate(current)
        // let duration = this.getDuration(current) - 1
        // let endDate = this.changeDay(startDate,duration)

        let curWeekDay = startDate.getDay()
        // begin date of this table may be some day of last month
        startDate.setDate(startDate.getDate() - curWeekDay + this.firstDay)

        let calendar = []
        // let isFinal = false

        for(let perWeek = 0 ; perWeek < 6 ; perWeek++) {

          let week = []

          for(let perDay = 0 ; perDay < 7 ; perDay++) {
            week.push({
              monthDay : startDate.getDate(),
              isToday : now.toDateString() == startDate.toDateString(),
              isCurMonth : startDate.getMonth() == current.getMonth(),
              weekDay : perDay,
              date : new Date(startDate),
              
            })

            startDate.setDate(startDate.getDate() + 1)
            // if (startDate.toDateString() == endDate.toDateString()) {
            //   isFinal = true
            //   break
            // }
          }

          calendar.push(week)
          // if (isFinal) break

        }
        return calendar
      },
}
}
</script>

<style>
.color-for-calendar{
  font-family: "Microsoft Yahei";
margin-top: 80px;
}
.color-for-calendar-header{

}
.lt-header{
  height: 49px;
	margin:auto;
	width: 70%;
border-left:1px solid #e0e0e0;
   border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
	display: flex;
    font-size: 20px;
}
.title
{
  line-height:49px;
	flex:1;
	text-align:center;
  cursor: pointer;
}
.prev-month{
	flex:1;  
      }
.pm{
  padding-bottom: 2px;
  padding-right: 2px;
  margin:auto;
   font-size: 30px;
  margin-top: 7.5px;
  line-height: 30px;
display:block;
   overflow: hidden;
width: 30px;
    height: 30px;
    text-align:center;
    border: 2px solid #b0aead;
    border-radius: 100%;
    cursor: pointer;
   
}
.lt-header a:hover{
  border-color:#F2276C; 
color:#F2276C;

}
.next-month{
  flex:1;
  border-right: 1px solid #e0e0e0;
    } 
    .nm{
  padding-bottom: 2px;
  padding-left: 2px;
  margin:auto;
  margin-top: 7.5px;
  line-height: 30px;
display:block;
   overflow: hidden;
width: 30px;
    height: 30px;
    text-align:center;
    border: 2px solid #b0aead;
    border-radius: 100%;
    cursor: pointer;
    font-size: 30px;
}




.color-for-calendar-body{
	text-align:center;
}

.calendar-weeks{
  height: 30px;
	margin:auto;
	width: 70%;
	display: flex;
    
    border-bottom:1px solid #e0e0e0;
    border-left:1px solid #e0e0e0;
}
.week{

  line-height:30px;
      flex:1;
     text-align: center;
      border-right:1px solid #e0e0e0;
}

.dates {
position:relative;
  }
.week-row{
  margin:auto;
  width: 70%;
      border-left:1px solid #e0e0e0;
      display: flex;
    }
    .day-cell{
        flex:1;
        min-height: 30px;
        padding:4px;
        border-right:1px solid #e0e0e0;
        border-bottom:1px solid #e0e0e0;}
    .day-number{
          text-align: center;
          font-weight: 900;
          color:#F2276C;
}
.today{
          background-color:#fcf8e3;
        }
.not-cur-month .day-number{
            color:rgba(0,0,0,.24);
          }

</style>