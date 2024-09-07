document.addEventListener('DOMContentLoaded', function () {
    fetchStocks();

    document.getElementById('stockForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const ticker = document.getElementById('ticker').value;
        const price = parseFloat(document.getElementById('price').value);

        fetch('/stocks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, ticker, price })
        }).then(response => {
            if (response.status === 201) {
                fetchStocks();
            }
        });
    });
});

function fetchStocks() {
    fetch('/stocks')
        .then(response => response.json())
        .then(stocks => {
            const stockList = document.getElementById('stockList');
            stockList.innerHTML = '';
            stocks.forEach(stock => {
                const stockItem = document.createElement('div');
                stockItem.className = 'stock-item';
                stockItem.innerHTML = `
                    <span>${stock.name} (${stock.ticker}): $${stock.price}</span>
                    <button onclick="deleteStock(${stock.id})">Delete</button>
                `;
                stockList.appendChild(stockItem);
            });
        });
}

function deleteStock(id) {
    fetch(`/stocks/${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.status === 200) {
            fetchStocks();
        }
    });
}
