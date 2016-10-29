format (date, format) {


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
  },