type doubleableTypes = Num(int) | String(string);
// type doubleableTypes('a) = Num(int) | String(string) | Arr(array('a)) | Li(list('a));

// pattern matching <3 wherever used on doubleableTypes, if more tags are added to the constructor, compiler will warn you. (can configure to error)
let double = fun 
    | Num(num) => Num(2 * num)
    | String(str) => String(str ++ str);

Js.log(double(Num(5)));
Js.log(double(String("moi")));

// let double = fun 
//     | Num(num) => Num(2 * num)
//     | String(str) => String(str ++ str)
//     | Arr(arr) => Arr(Belt.Array.concat(arr, arr))
//     | Li(li) => Li(Belt.List.concat(li, li));

// Js.log(double(Num(5)));
// Js.log(double(String("moi")));
// Js.log(double(Arr([|3, 4, 5|])));
// Js.log(double(Li([3, 4, 5])));
