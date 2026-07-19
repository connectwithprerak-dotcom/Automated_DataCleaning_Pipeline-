# this code will help you clean the data 

return items.map(item => {
  item.json["name"] = String(item.json["name"] ?? "")
    .trim()
    .replace(/\s+/g, " ");

  item.json.email = String(item.json.email ?? "")
    .trim()
    .toLowerCase();

  item.json.phone = String(item.json.phone ?? "")
    .replace(/\D/g, "");

  return item;
});

  
