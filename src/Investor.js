function Investor(){
    let inver = [
        {
          "id": 1,
          "itemName": "Laptop",
          "category": "Electronics",
          "quantity": 50,
          "location": "Warehouse A",
          "lastRestockDate": "2023-06-15"
        },
        {
          "id": 2,
          "itemName": "Desk Chair",
          "category": "Furniture",
          "quantity": 25,
          "location": "Warehouse B",
          "lastRestockDate": "2023-07-01"
        },
        {
          "id": 3,
          "itemName": "Printer",
          "category": "Office Supplies",
          "quantity": 30,
          "location": "Warehouse C",
          "lastRestockDate": "2023-05-20"
        },
        {
          "id": 4,
          "itemName": "Monitor",
          "category": "Electronics",
          "quantity": 40,
          "location": "Warehouse A",
          "lastRestockDate": "2023-06-25"
        },
        {
          "id": 5,
          "itemName": "Conference Table",
          "category": "Furniture",
          "quantity": 10,
          "location": "Warehouse B",
          "lastRestockDate": "2023-07-05"
        },
        {
          "id": 6,
          "itemName": "Projector",
          "category": "Electronics",
          "quantity": 15,
          "location": "Warehouse C",
          "lastRestockDate": "2023-06-10"
        },
        {
          "id": 7,
          "itemName": "File Cabinets",
          "category": "Office Supplies",
          "quantity": 20,
          "location": "Warehouse A",
          "lastRestockDate": "2023-07-02"
        },
        {
          "id": 8,
          "itemName": "Office Chairs",
          "category": "Furniture",
          "quantity": 35,
          "location": "Warehouse B",
          "lastRestockDate": "2023-06-28"
        },
        {
          "id": 9,
          "itemName": "Scanner",
          "category": "Electronics",
          "quantity": 25,
          "location": "Warehouse C",
          "lastRestockDate": "2023-06-18"
        },
        {
          "id": 10,
          "itemName": "Whiteboard",
          "category": "Office Supplies",
          "quantity": 15,
          "location": "Warehouse A",
          "lastRestockDate": "2023-07-03"
        },
        {
          "id": 11,
          "itemName": "Desk",
          "category": "Furniture",
          "quantity": 30,
          "location": "Warehouse B",
          "lastRestockDate": "2023-06-30"
        },
        {
          "id": 12,
          "itemName": "External Hard Drive",
          "category": "Electronics",
          "quantity": 20,
          "location": "Warehouse C",
          "lastRestockDate": "2023-06-22"
        },
        {
          "id": 13,
          "itemName": "Staplers",
          "category": "Office Supplies",
          "quantity": 50,
          "location": "Warehouse A",
          "lastRestockDate": "2023-07-05"
        },
        {
          "id": 14,
          "itemName": "Table Lamp",
          "category": "Furniture",
          "quantity": 15,
          "location": "Warehouse B",
          "lastRestockDate": "2023-06-29"
        },
        {
          "id": 15,
          "itemName": "Wireless Mouse",
          "category": "Electronics",
          "quantity": 40,
          "location": "Warehouse C",
          "lastRestockDate": "2023-06-24"
        },
        {
          "id": 16,
          "itemName": "Notebooks",
          "category": "Office Supplies",
          "quantity": 60,
          "location": "Warehouse A",
          "lastRestockDate": "2023-07-01"
        },
        {
          "id": 17,
          "itemName": "Office Desk",
          "category": "Furniture",
          "quantity": 25,
          "location": "Warehouse B",
          "lastRestockDate": "2023-06-27"
        },
        {
          "id": 18,
          "itemName": "Digital Camera",
          "category": "Electronics",
          "quantity": 20,
          "location": "Warehouse C",
          "lastRestockDate": "2023-06-19"
        },
        {
          "id": 19,
          "itemName": "Paper Shredder",
          "category": "Office Supplies",
          "quantity": 10,
          "location": "Warehouse A",
          "lastRestockDate": "2023-07-04"
        },
        {
          "id": 20,
          "itemName": "Office Sofa",
          "category": "Furniture",
          "quantity": 5,
          "location": "Warehouse B",
          "lastRestockDate": "2023-06-26"
        },
        {
          "id": 21,
          "itemName": "Headphones",
          "category": "Electronics",
          "quantity": 30,
          "location": "Warehouse C",
          "lastRestockDate": "2023-06-21"
        },
        {
          "id": 22,
          "itemName": "Binder Clips",
          "category": "Office Supplies",
          "quantity": 100,
          "location": "Warehouse A",
          "lastRestockDate": "2023-07-06"
        },
        {
          "id": 23,
          "itemName": "Meeting Tables",
          "category": "Furniture",
          "quantity": 12,
          "location": "Warehouse B",
          "lastRestockDate": "2023-06-23"
        },
        {
          "id": 24,
          "itemName": "Smartphone",
          "category": "Electronics",
          "quantity": 50,
          "location": "Warehouse C",
          "lastRestockDate": "2023-06-20"
        },
        {
          "id": 25,
          "itemName": "Dry Erase Markers",
          "category": "Office Supplies",
          "quantity": 75,
          "location": "Warehouse A",
          "lastRestockDate": "2023-07-07"
        },
        {
          "id": 26,
          "itemName": "Office Cubicles",
          "category": "Furniture",
          "quantity": 8,
          "location": "Warehouse B",
          "lastRestockDate": "2023-06-22"
        },
        {
          "id": 27,
          "itemName": "Desktop Computer",
          "category": "Electronics",
          "quantity": 25,
          "location": "Warehouse C",
          "lastRestockDate": "2023-06-17"
        },
        {
          "id": 28,
          "itemName": "Pens",
          "category": "Office Supplies",
          "quantity": 200,
          "location": "Warehouse A",
          "lastRestockDate": "2023-07-08"
        },
        {
          "id": 29,
          "itemName": "Bookshelves",
          "category": "Furniture",
          "quantity": 15,
          "location": "Warehouse B",
          "lastRestockDate": "2023-06-21"
        },
        {
          "id": 30,
          "itemName": "Calculators",
          "category": "Electronics",
          "quantity": 35,
          "location": "Warehouse C",
          "lastRestockDate": "2023-06-16"
        }
      ]
    return(
        <>
                <table border="1" width="100%">

                </table>
        </>
    )
}
export default Investor