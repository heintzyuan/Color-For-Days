<template>
<div class="comp-full-calendar">
<!-- header pick month -->
<div class="full-calendar-header">
    <div class="header-left">
      <slot name="header-left">
      </slot>
    </div>
    <div class="header-center">
      <span class="prev-month" @click.stop="goPrev">{{leftArrow}}</span>
      <span class="title">{{title}}</span>
      <span class="next-month" @click.stop="goNext">{{rightArrow}}</span>
    </div>
    <div class="header-right">
      <slot name="header-right">
      </slot>
    </div>
  </div>
  <!-- body display date day and events -->
  <div class="full-calendar-body">
    <div class="weeks">
      <strong class="week" v-for="week in weekNames">{{week}}</strong>
    </div>
    <div class="dates" v-el:dates>
      <div calss="dates-bg">
        <div class="week-row" v-for="week in currentDates">
          <div class="day-cell" v-for="day in week"
            :class="{'today' : day.isToday,
              'not-cur-month' : !day.isCurMonth}">
            <p class="day-number">{{day.monthDay}}</p>
          </div>
        </div>
      </div>

      <!-- absolute so we can make dynamic td -->
      <div class="dates-events">
        <div class="events-week" v-for="week in currentDates">
          <div class="events-day" v-for="day in week" track-by="$index"
            :class="{'today' : day.isToday,
              'not-cur-month' : !day.isCurMonth}" @click.stop="dayClick(day.date, $event)">
            <p class="day-number">{{day.monthDay}}</p>
            <div class="event-box">
              <p class="event-item" v-for="event in day.events" v-show="event.cellIndex <= eventLimit"
                 :class="[classNames(event.cssClass), {
                  'is-start'   : isStart(event.start, day.date),
                  'is-end'     : isEnd(event.end,day.date),
                  'is-opacity' : !event.isShow
                  }]" 
                @click="eventClick(event,$event)">
                {{event | isBegin day.date day.weekDay}}
              </p>
              <p v-if="day.events.length > eventLimit"
                class="more-link" @click.stop="selectThisDay(day, $event)">
                + {{day.events[day.events.length -1].cellIndex - eventLimit}} more
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- full events when click show more -->
      <div class="more-events" v-show="showMore"
        :style="{left: morePos.left + 'px', top: morePos.top + 'px'}">
        <div class="more-header">
          <span class="title">{{selectDay.date | moreTitle }}</span>
          <span class="close" @click.stop="showMore = false">x</span>
        </div>
        <div class="more-body">
          <ul class="body-list">
            <li v-for="event in selectDay.events"
              v-show="event.isShow" class="body-item"
              @click="eventClick(event,$event)">
              {{event.title}}
            </li>
          </ul>
        </div>
      </div>

      <slot name="body-card">

      </slot>

    </div>
  </div>
  </div>

</template>



<script>
export default {
    en : {
    weekNames :  ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'],
    monthNames : ['January','February','March','April','May','June','July','August','September','October','November','December'],
    titleFormat : 'MM/yyyy'
  },
  zh : {
    weekNames : ['周日', '周一','周二','周三','周四','周五','周六'],
    monthNames : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','11月','12月'],
    titleFormat : 'yyyy年MM月'
  },
created () {
     

      (this.events==null)?'':this.events.forEach((item, index) => {
        item._id = item.id || index
        item.end = item.end || item.start
      })
    },
filters : {
      isBegin (event, date, index) {
        let st = new Date(event.start)

        if (index == 0 || st.toDateString() == date.toDateString()) {
          return event.title
        }
        return '　'
      },
      moreTitle (date) {
        let dt = new Date(date)
        return this.weekNames[dt.getDay()] + ', ' + this.monthNames[dt.getMonth()] + dt.getDate()
      }
    },
    computed : {
      currentDates () {
        return this.getCalendar()
      }
    },

     data:function() {
      return {
        title      : '',
        leftArrow  : '<',
        rightArrow : '>',
        weekMask : [1,2,3,4,5,6,7],
        // events : [],
        isLismit : true,
        eventLimit : 3,
        showMore : false,
        morePos : {
          top: 0,
          left : 0
        },
        selectDay : {}
      }
    },
    methods : {
        /*date function*/
getDuration (date) {
    // how many days of this month
    let dt = new Date(date)
    var month = dt.getMonth()
    dt.setMonth(dt.getMonth() + 1)
    dt.setDate(0);
    return dt.getDate()
  },
  changeDay (date, num) {
    let dt = new Date(date)
    return new Date(dt.setDate(dt.getDate()+num))
  },
  getStartDate(date) {
    if(date!=null){
    // return first day of this month
    return new Date(date.getFullYear(), date.getMonth(), 1)
}
  },
  getEndDate (date) {
    // get last day of this month
    if(date!=null){
    let dt = new Date(date.getFullYear(),date.getMonth()+1,1) // 1st day of next month
    return new Date(dt.setDate(dt.getDate()-1)) // last day of this month
}
  },
  format (date, format) {
    if(date!=null&&format!=null){
    if (typeof date === 'string') {
        date = new Date(date.replace(/-/g, '/'))
    } else {
        date = new Date(date)
    }

    var map = {
        'M' : date.getMonth() + 1,
        'd' : date.getDate(),
        'h' : date.getHours(),
        'm' : date.getMinutes(),
        's' : date.getSeconds(),
        'q' : Math.floor((date.getMonth() + 3) / 3),
        'S' : date.getMilliseconds()
    }

    format = format.replace(/([yMdhmsqS])+/g, (all, t) => {
            var v = map[t]
            if (v !== undefined) {
                if (all.length > 1) {
                    v = '0' + v
                    v = v.substr(v.length - 2)
                }
                return v
            } else if (t === 'y') {
                return String(date.getFullYear()).substr(4 - all.length)
            }
        return all
    })
    return format
}
  },

/*header function*/

      goPrev () {
        this.currentDate = this.changeMonth(this.currentDate, -1)
        this.dispatchEvent()
      },
      goNext () {
        this.currentDate = this.changeMonth(this.currentDate, 1)
        this.dispatchEvent()
      },
      changeMonth (date, num) {
        let dt = new Date(date)
        return new Date(dt.setMonth(dt.getMonth() + num))
      },
      dispatchEvent() {
        this.title = this.format(this.currentDate, this.titleFormat)

        let startDate = this.getStartDate(this.currentDate)
        if(startDate!=null){
        let curWeekDay = startDate.getDay()

        // 1st day of this monthView
        startDate.setDate(startDate.getDate() - curWeekDay + 1) 

        // the month view is 6*7
        let endDate = this.changeDay(startDate, 41)

        // 1st day of current month
        let currentDate = this.getStartDate(this.currentDate)

        this.$dispatch('changeMonth', 
          this.format(startDate, 'yyyy-MM-dd'),
          this.format(endDate, 'yyyy-MM-dd'),
          this.format(currentDate,'yyyy-MM-dd')
        )
    }
      },

      /*header function*/

classNames (cssClass) {
        if(!cssClass) return ''
        // string  
        if (typeof cssClass == 'string') return cssClass

        // Array
        if (Array.isArray(cssClass)) return cssClass.join(' ')
        
        // else
        return ''
      },
      getCalendar () {
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
              events : this.slotEvents(startDate)
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
      slotEvents(date) {

        // find all events start from this date
        let cellIndexArr = []
        let thisDayEvents = this.events.filter(day => {
          let dt = new Date(day.start)
          let st = new Date(dt.getFullYear(),dt.getMonth(),dt.getDate())
          let ed = day.end ? new Date(day.end) : st
          return date>=st && date<=ed
        })

        // sort by duration
        thisDayEvents.sort((a,b)=>{
          if(!a.cellIndex) return 1
          if (!b.cellIndex) return -1
          return a.cellIndex - b.cellIndex
        })

        // mark cellIndex and place holder
        for (let i = 0;i<thisDayEvents.length;i++) {
          thisDayEvents[i].cellIndex = thisDayEvents[i].cellIndex || (i + 1)
          thisDayEvents[i].isShow = true
          if (thisDayEvents[i].cellIndex == i+1 || i>2) continue
          thisDayEvents.splice(i,0,{
            title : 'holder',
            cellIndex : i+1,
            start : this.format(date,'yyyy-MM-dd'),
            end : this.format(date,'yyyy-MM-dd'),
            isShow : false
          })
        }

        return thisDayEvents
      },
      isStart (eventDate, date) {
        let st = new Date(eventDate)
        return st.toDateString() == date.toDateString()
      },
      isEnd (eventDate,date) {
        let ed = new Date(eventDate)
        return ed.toDateString() == date.toDateString()
      },
      selectThisDay (day, jsEvent) {
        this.selectDay = day
        this.showMore = true
        this.morePos = this.computePos(event.target)
        this.morePos.top -= 100
        let events = day.events.filter(item =>{
          return item.isShow == true
        })
        this.$dispatch('moreClick', day.date, events, jsEvent)
      },
      computePos (target) {
        let eventRect = target.getBoundingClientRect()
        let pageRect = this.$els.dates.getBoundingClientRect()
        return {
          left : eventRect.left - pageRect.left,
          top  : eventRect.top + eventRect.height - pageRect.top
        }
      },
      dayClick(day, jsEvent) {
        this.$dispatch('dayClick', day, jsEvent)
      },
      eventClick(event, jsEvent) {
        console.log('cellIndex', event.cellIndex)
        if (!event.isShow) {
          return
        }
        jsEvent.stopPropagation()
        let pos = this.computePos(jsEvent.target)
        this.$dispatch('eventClick', event, jsEvent, pos)
      }

    }

}

</script>


<style lang="scss">
.full-calendar-header{
  display: flex;
  align-items: center;
  .header-left,.header-right{
    flex:1;
  }
  .header-center{
    flex:3;
    text-align:center;
    .title{
      margin: 0 10px;
    }
    .prev-month,.next-month{
      cursor: pointer;
    }
  }
}
  
.full-calendar-body{
  margin-top: 20px;
  .weeks{
    display: flex;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    border-left:1px solid #e0e0e0;
    .week{
      flex:1;
      text-align: center;
      border-right:1px solid #e0e0e0;
    }
  }
  .dates {
    position:relative;
    .week-row{
      // width: 100%;
      // position:absolute;
      border-left:1px solid #e0e0e0;
      display: flex;
      .day-cell{
        flex:1;
        min-height: 100px;
        padding:4px;
        border-right:1px solid #e0e0e0;
        border-bottom:1px solid #e0e0e0;
        .day-number{
          text-align: right;
        }
        &.today{
          background-color:#fcf8e3;
        }
        &.not-cur-month{
          .day-number{
            color:rgba(0,0,0,.24);
          }
        }
      }
    }
    .dates-events{
      position:absolute;
      top:0;
      left:0;
      z-index:1;
      width: 100%;
      .events-week{
        display: flex;
        .events-day{
          cursor: pointer;
          flex:1;
          min-height: 109px;
          overflow: hidden;
          text-overflow: ellipsis;
          .day-number{
            text-align: right;
            padding:4px 5px 4px 4px;
            opacity: 0;
          }
          &.not-cur-month{
            .day-number{
              color:rgba(0,0,0,.24);
            }
          }
          .event-box{
            .event-item{
              cursor: pointer;
              font-size:12px;
              background-color:#C7E6FD;
              margin-bottom:2px;
              color: rgba(0,0,0,.87);
              padding:0 0 0 4px;
              height: 18px;
              line-height: 18px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              &.is-start{
                margin-left: 4px;
                // border-top-left-radius:4px;
                // border-bottom-left-radius:4px;
              }
              &.is-end{
                margin-right: 4px;
                // border-top-right-radius:4px;
                // border-bottom-right-radius:4px;
              }
              &.is-opacity{
                opacity: 0;
              }
            }
            .more-link{
              cursor: pointer;
              // text-align: right;
              padding-left: 8px;
              padding-right: 2px;
              color: rgba(0,0,0,.38);
              font-size: 14px;
            }
          }
        }
      }
    }
    .more-events{
      position:absolute;
      width: 150px;
      z-index: 2;
      border:1px solid #eee;
      box-shadow: 0 2px 6px rgba(0,0,0,.15);
      .more-header{
        background-color:#eee;
        padding:5px;
        display: flex;
        align-items : center;
        font-size: 14px;
        .title{
          flex:1;
        }
        .close{
          margin-right: 2px;
          cursor: pointer;
          font-size: 16px;
        }
      }
      .more-body{
        height: 140px;
        overflow: hidden;
        .body-list{
          height: 120px;
          padding:5px;
          overflow: auto;
          background-color:#fff;
          .body-item{
            cursor: pointer;
            font-size:12px;
            background-color:#C7E6FD;
            margin-bottom:2px;
            color: rgba(0,0,0,.87);
            padding:0 0 0 4px;
            height: 18px;
            line-height: 18px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
.comp-full-calendar{
    // font-family: "elvetica neue", tahoma, "hiragino sans gb";
    padding:20px;
    background: #fff;
    max-width: 960px;
    margin:0 auto;
    ul,p{
      margin:0;
      padding:0;
      font-size: 14px;
    }
  }

</style>