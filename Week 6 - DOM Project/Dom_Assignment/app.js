console.log('Dom project - Assignment - Top 10 Books I Have Read')

var BookListOutput=['the_museum_of_innocence','the_red_haired_woman','animal_farm','nineteen_eighty_four','a_momento_for_istanbul'
,'a_tale_of_two_cities','the_green_mile','the_little_prince','white_fang','lily_of_the_valley']
console.log(BookListOutput)

BookList = ['The Museum Of Innocence','The Red Haired Woman','Animal Farm','Nineteen Eighty Four','A Momento For Istanbul','A Tale Of Two Cities','The Green Mile','The Little Prince','White Fang','Lily Of The Valley'];


MenuList=['Contact','About Me','Books','Home']
menu_link=['home','books','about-me','contact']

const header=createAndAppend('header',document.body,null,'header')

const logoDiv=createAndAppend('div',header,null,'logoDiv')
const menuDiv=createAndAppend('div',header,null,'menuDiv')

const logo=createAndAppend('img',logoDiv,null,'logo','images/logo.png')
const mainDiv =createAndAppend('div',document.body,null,'maindiv')
const title=createAndAppend('h1',mainDiv,'Top 10 Books I Have Read','h1')



var objectBook = {
    the_museum_of_innocence: {
      title: BookList[0],
      language:'Turkish',
      author:'Orhan Pamuk',
      info: "Set in Istanbul between 1975 and today - tells the story of Kemal, the son of one of Istanbul's richest families, and of his obsessive love for a poor and distant relation, the beautiful Fusun, who is a shop-girl in a small boutique.",  
      image: 'images/'+BookListOutput[0]+'.jpg'  
    },
    the_red_haired_woman:{
        title: BookList[1],
        language:'Turkish',
        author:'Orhan Pamuk',
        info: "This is a richly literary work: The Red-Haired Woman borrows from the tradition of the French conte philosophique and asks probing questions of ethics and of the role of art in our lives. ",  
        image: 'images/'+BookListOutput[1]+'.jpg'  
      },
      animal_farm:{
        title: BookList[2],
        language:'English',
        author:'George Orwell',
        info: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. ",  
        image: 'images/'+BookListOutput[2]+'.jpg'  
      },
      nineteen_eighty_four:{
        title: BookList[3],
        language:'English',
        author:'George Orwell',
        info: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.",  
        image: 'images/'+BookListOutput[3]+'.jpg'  
      },
      a_momento_for_istanbul:{
        title: BookList[4],
        language:'Turkish',
        author:'Ahmet Umit',
        info: "A thrilling tale which moves back and forth through time, from the early days of Byzantium to the thriving metropolis of Istanbul... A corpse is discovered at the base of the statue of Atatiirk in old Istanbul, an antique coin left in its hand... ",  
        image: 'images/'+BookListOutput[4]+'.jpg'  
      },
      a_tale_of_two_cities:{
        title: BookList[5],
        language:'Turkish',
        author:'Charles Dickens',
        info: "A Tale of Two Cities (1859) is a historical novel by Charles Dickens, set in London and Paris before and during the French Revolution. The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris and his release to live in London with his daughter Lucie, whom he had never met. ",  
        image: 'images/'+BookListOutput[5]+'.jpg'  
      },
      the_green_mile:{
        title: BookList[6],
        language:'English',
        author:'Stephen King',
        info: "When it first appeared, one volume per month, Stephen King's THE GREEN MILE was an unprecedented publishing triumph: all six volumes ended up on the New York Times bestseller lists—simultaneously—and delighted millions of fans the world over.",  
        image: 'images/'+BookListOutput[6]+'.jpg'  
      },
      
      the_little_prince:{
        title: BookList[7],
        language:'English',
        author:'Antoine de Saint-Exupery',
        info: "'So when you look at the sky at night, it will be as if all the stars were laughing; as though in one of the stars I live and I will be laughing…You will have stars that know how to laugh!' And he laughed again.",  
        image: 'images/'+BookListOutput[7]+'.jpg'  
      },
      white_fang:{
        title: BookList[8],
        language:'Turkish',
        author:'Jack London',
        info: "White Fang is a novel by American author Jack London (1876–1916) — and the name of the book's eponymous character, a wild wolfdog. First serialized in Outing magazine, it was published in 1906. The story details White Fang's journey to domestication in Yukon Territory and the Northwest Territories during the 1890s Klondike Gold Rush. ",  
        image: 'images/'+BookListOutput[8]+'.jpg'  
      },
      lily_of_the_valley:{
        title: BookList[9],
        language:'English',
        author:'Balzac',
        info: "Lily of the valley, is a highly poisonouswoodland flowering plant with sweetly scented, pendent, bell-shaped white flowers borne in sprays in spring. It is native throughout the cool temperate Northern Hemisphere in Asia and Europe.",  
        image: 'images/'+BookListOutput[9]+'.jpg'  
      },
  };

  const menu=renderList(MenuList,'menuDiv',menu_link)
  const books=renderList(BookList,"maindiv",BookListOutput)

function renderList(array,className) {   

    var ul=document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        
        const element = array[i];        
        
        var li=document.createElement('li');                   
            // li.innerHTML="<h3 >"+element+"</h3>";
            
            if(array.length===10){
                var objectName=BookListOutput[i]
                const bookDiv=createAndAppend('div',mainDiv,null,'bookDiv')
                const bookImage = createAndAppend('img',bookDiv,null,'bookImage',objectBook[objectName].image) 
                const href = createAndAppend('a',bookDiv,"<h3 >"+objectBook[objectName].title+"</h3>",'link',null,'#')
                const info = createAndAppend('p',bookDiv,objectBook[objectName].info,'info',)    
                const author = createAndAppend('p',bookDiv,'<b>Author</b> :'+objectBook[objectName].author,'author',)   
                const language = createAndAppend('p',bookDiv,'<b>Language</b> :'+objectBook[objectName].language,'language',)      

            }
            else{
                const href = createAndAppend('a',li,"<h3 >"+element+"</h3>",'menu',null,'#')   

            }

            ul.appendChild(li); 
    }
   
    document.getElementsByClassName(className)[0].appendChild(ul);
}

function createAndAppend(child,append,text,className,srcOfimg,href){
    const el = document.createElement(child)    
    append.appendChild(el)
    el.innerHTML=text
    el.className=className    
    el.src=srcOfimg
    el.href=href
    return el;
}
const footer=createAndAppend('footer',mainDiv,null,'footer')

const footertext=createAndAppend('a',footer,'Designed by Zeyd | 2019','link',"#")