/* info som blir displayed för varje bok*/
const bookDetails = (book) => { 
    let html = `
    <div id="bookDetail" class="book__details absolute inset-y right-16 rounded-lg bg-black-100 p-4 w-1/5 top-20 ml-5 mx-auto 
    flex flex-row text-center text-black-400 font-bold">
        <img src="${book.coverImage}" alt="Error 404 : image not found"width="100" height="60">
        
        <div class="border"></div>  
        <div class="detail__list">
            <ul class="list">

                <li>Title: ${book.title}</li>
                <li>Author: ${book.author}</li>
                <li>Pages: ${book.pages}</li>
                <li>Release date: ${book.releaseDate}</li>
                
            </ul>
        </div> 
    </div>
    `;

    return html;
};