console.clear()

var currentDay = 'mon'

switch(currentDay){
    case 'sun':
        console.log('timing:09:15-05:25')
        break;
        case 'mon':
        console.log('timing:02:15-05:25')
        break;
        case 'tue':
        console.log('timing:01:15-08:25')
        break;
        case 'wed':
        console.log('timing:07:15-04:25')
        break;
        case 'thur':
        console.log('timing:12:15-02:25')
        break;
        case 'fri':
        console.log('timing:08:15-08:25')
        break;
        case 'sat':
        console.log('timing:10:15-09:25')
        break;
default:
    console.log('timing:08:00-06:12')
}