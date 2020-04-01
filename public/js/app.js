

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const m1 = document.querySelector('#m1')
const m2 = document.querySelector('#m2')



weatherForm.addEventListener('submit',(event)=>
{
    event.preventDefault()
    console.log('Search pressed')
    m1.textContent = 'Loading..'
    m2.textContent =''
    const location= search.value
    fetch('/weather?address='+ encodeURIComponent(location)).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                m1.textContent = data.error                
            }
            else{
                m1.textContent = data.location
                m2.textContent = data.foreCast
                console.log(data.location)
                console.log(data.foreCast)
            }
        })
    })
})


