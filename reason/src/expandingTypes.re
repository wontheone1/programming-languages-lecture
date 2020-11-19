[@decco] type doubleableTypes = Num(int) | String(string);

// pattern matching <3 wherever used on doubleableTypes, if more tags are added to the constructor, compiler will warn you. (can configure to error)
let double = fun 
    | Num(num) => Num(2 * num)
    | String(str) => String(str ++ str);

Js.log(doubleableTypes_encode(double(Num(5))));
Js.log(doubleableTypes_encode(double(String("moi"))));

// [@decco] type doubleableTypes = Num(int) | String(string) | Arr(array(int)) | Li(list(int));

// let double = fun 
//     | Num(num) => Num(2 * num)
//     | String(str) => String(str ++ str)
//     | Arr(arr) => Arr(Belt.Array.concat(arr, arr))
//     | Li(li) => Li(Belt.List.concat(li, li));

// Js.log(doubleableTypes_encode(double(Num(5))));
// Js.log(doubleableTypes_encode(double(String("moi"))));
// Js.log(doubleableTypes_encode(double(Arr([|3, 4, 5|]))));
// Js.log(doubleableTypes_encode(double(Li([3, 4, 5]))));
