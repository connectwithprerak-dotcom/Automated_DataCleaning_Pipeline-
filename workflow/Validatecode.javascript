# this code will validate your data

return items.map(item => {

  const name = String(item.json["name"] ?? "");
  const email = String(item.json.email ?? "");
  const phone = String(item.json.phone ?? "");

  let errors = [];

  // Name
  if (name.trim().length === 0)
    errors.push("Name is empty");

  // Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    errors.push("Invalid email");

  // Number
  if (!/^\d+$/.test(phone.replace(/\D/g, "")))
    errors.push("Number contains non-digits");

  item.json.record_valid = errors.length === 0;
  item.json.error_reason = errors.join(", ");

  return item;

});
