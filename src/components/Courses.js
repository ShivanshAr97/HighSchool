import React from 'react'

const Courses = () => {
    return (
        <div>
            <div className='my-8 px-4 mx-2 border flex flex-col'>
                <img className='flex my-4 mx-auto rounded-lg w-60 object-cover' src="data:image/png;base64,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" alt="" />
                <h1 className='text-black font-bold text-lg text-center my-1'>Infosys Python Certification Course Series</h1>
                <div className='flex justify-between text-sm'>
                    <span>Rating: 4.8/5.0</span>
                </div>
                <button className='bg-blue-400 px-4 mx-auto w-[120px] py-1 my-2 rounded-lg text-white font-medium mb-2'><a href="https://infyspringboard.onwingspan.com/web/en/login?ref=%2Fpage%2Fembed-schedulo%3Fshowevent%3Dtrue%26eventId%3D488">Enroll now</a></button>
            </div>

            <div className='my-8 px-4 mx-2 border flex flex-col'>
                <img className='flex my-4 mx-auto rounded-lg w-60 object-cover' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAB1CAMAAADOZ57OAAAAq1BMVEX///8AAAAAZpkAWZLa2toAX5UAZJgAXJO/0d/d5++Pr8jBwcGHh4deXl7s7OxISEhoaGjj4+M5eaQAV5FVVVXk7fIwdKL3+/yhoaHY2Ninp6fPz8/y8vLV4eoxMTH29vY4ODhPT08gICAtLS0TExN8fHwREREbGxvFxcWZmZm4uLiTk5M/Pz/t8/ddj7Jqamqeuc6txNZxm7qFqMNhkrRDgKm8z91/pMCAgIBlZmhkAAAKq0lEQVR4nO2d62KiMBCFKQj2tlpvbdW2Vnu3tZfduu37P9mKgJI5E8AS0LA5PwnBJB9JhskkWpaRkZHR7qq3X7QuZ9uuY3V06Dn1wtU5/dh2PauhS8+1y5DntM+2XdcK6KDjlYLLJ2YbYLlll4bLtt35tmurvd7r5eGy7c7ltuuru8rsXosO9nvb9dVcZ50ycS1ejm1XWHMdOKXysp1tV1hzGV56yfDSS4aXXjK89JLhpZcML71keOklw0svGV56ScbLc13XK8C1mJ/XRf9xWFNQcz3F8vIc7/Xrz9fcrSsnlpfX+c3eUt1HJdXXThyvzme06rE/Vz1cBryGL01BL0/ZSvu4t1Z3pKD6rWtSkG8FD1VYnDt6B/Ly3Pga1Ydi/33A62iP6DhTdQZCnlsFwGq0ICf5n6myOL/oHcjLFQOZ9tUCy8OrTzKNC2gg7XjBCvCh0micPLyuaK4j9Q2kGy/vFR6i1ObIwYt2LxUdTHtedQyw+KOyg+Xg9Qy89tQ3kG68OviQS5UROTl4nSCv3N9huvPyTvEhM5U2fQ5eXeQ1VN5AuvFq40POdoSX6V8WYx/iQ3alfz0hr9xfYNrz6mDE9P6OzF9Qmb2m+gbSjVf9Lzzka0fsQ+uF5srvQ9SeF05gZ0qdvnl40dp0c7eP/rxsh+7S+twZ/4Y1FfJc5W6eKvCyHfGL+VCthz4XL2sYy/KWv3kqwcsTethvxQsq+XhZ1uA6yHCnZsmyArwWNsfpR+Cj7x26qrde5uVlWaPWsNZQ0zwV4WV7dceez9uuo36jbH5eSlUNXktmXhHhG4bXZsXJzqsgVZbXRavWr7U2HKhHjcZFYnEML1FKeLUGbzerB0xOBplMoVim5vHRSFKcQnllGT814zWg6QtdC3e0ju/hjtvnCytRo/MJ/d0hW5yCeHlu3XFc13WcuptMrWRejen3eNE091e/no8453AKrxaD6yF+Q3/M3OHrLoHY6JjLMW78iJfnEK29vXWaFKJxnfb7fs93FJ/19t/niVZlHl7f466gZjRbdIkiP/BU9DiOp5vyuqHJC8VANH5JaPkayKrB9dmlpj/yH856olbu+folSZmdektaf8SIqtm7Lffo5+EFC5atMAFqvrw6pGPOYqCiETrJvO6YRm2tk6UNH0gSXcIsu0YaNOiVH/h7e9EdTo8m+bycV+bMmndHNirm4QVvc9R2DzTBv8gOOrQBEnk9Mvn7CcWhumXGRCAi6DyluJvxOqBJp57X4Q/xmrUlg2IhvKAjWfLX+DbZgI7xGjG5Yys4EF3HCKZMbkJMkmpe8vNqXvkxsRBeMM0kjjpxYEm8xpg1NgHiYMtoQmqQ3LsY5eIFbE6Tjhd6ZXtYSbz4wTDQbeyRCbxgbNrbi0X5X6c29VKkvbNlkufPyct+T2reNjeHFcILhqYhvSAo1ofkvJiRK7YX4i2lnVcSTNJx1lwrqeWVfBjUjDM6yuEFBoio9Swk54XjXQwzZxk2T7rclGYl50qRWl4ppxlyR78Vwivj4LTSekSU8kJTPhbccwGJ32FRpjA0r2vG2S9pUssrTYyHaid4rUcpGS805ePRB9SYeYm5eSFqfGUjSsbQ7vfzt/TToFxeH9jBdoPXqvElvLAr3MdMczo7inE/1E6JjBTWNhxHEcrDMVvQcnlZ6EzcDV6rnBJe+DUQ/wggcXU3KcUML3POkri7Zcqkl80LQxfL5HV9PJiec820ful5XmgYxLxQsK+pZYmiHSnsQkwpxJwYD1sMr97H4dfhB3u8PIYGl8erG6VyL+6LrI18XjhyCfsqyDwEW4xpoP+xrBR0nYzxf6nndTDv1F3XrXc+OWsRo+WWl0vgdb7Ox80cYRLLK3kfJ53bcEmZ1C4YL3GIxT32aJEo5/WxOg3d9ZguNqcTWFm8hNUMZqSpSVJOGAtPXBkhHYWJ4adEl3MflOAeM+KLpZpX/PgAbu8YTGAl8SLLxDiJhRY9wwsuPYvPIqPduYUiK87+5zl6XLj1MeiEinkdCIcH1NE9BRZ9SbyIYxxf3HAwAjhvsDhD5yeS3LdQxID0keJmKG65GwwdxbzIcOfBDWBwlMMLTj2BKSmkALzu6GhIW4z6FZ/PQQPya/5vwWZDIOELeqFaXpfkbA68A7dTLC8XzQv2yYK/PhwwgRcFC7MM+5mULL/RwU/FjaNK9hMl8KInB7iH9A7Ym1kOL1jYhVYeSxoIRGM+mFMK0uR7U+Aiu/W6YF6vxPrzPukdM3o6Tjm8ICsMNE1JA6EI+8wrKWvdcg4uNn6qYF50hYvZ7LcjvGA1KzuvF/FJ4/QcIG41ja1hwbxO6dcVGBy7wgsMxOy8yHctF+KWpl3l5bn0jirwEv1GKUuhnO6532FrWHb/qtM7KsFLiOi9zZJD1MTwClQSL+GTOVNcFPzWbo6HVeUVDzuEQyXSdcLxYo96+U94gfcCsubkFWvd1Khe1DFnz7ObjgyvUBvxGqMNuF7yp67jyc3NzSTQw0K3ge4XWt3ie3bhibj3wircH1VRXli8mDedhmdkPCIOisgeRwFumGryYuKxiTbh1WejuaNlSboInPFkb3SLcHeBm9PwCiXnNeBuX4dU0aSMp+xgdDc3IMLHneEVSsorGKcYr25URNqm2QZEPHyY7oWwuEXNavLi9hOJyswr6i64KTlamfwml2k4m0T4PFxRwW8F1fuJVPG6u2gkKLSmy+AVmQHcXr0gBTpBtoOsmNNR6dI0cyDnrvJKVvgmlsFrFfjBfGeFYOB6pjMguCqL32Dcdgg9eQ0kTVgkL9zTEJkI2A0epHNYbJUroWJLsYGtcMRjJXix+5cFbc6LG52CRUZun0mT+auJ0ePxQ2xvILswPRkERBvM7kBfhlfUwKm8uJWTppTkIudgGE60o1Z/+vQ2ISWRbica/xrLkvCMgUrwgjUOJby4TZrBTMoYjzLFbIofRH5gNGoleEH7KeHFmXTBTyZvt+WKvlT2XCuRYATDi16P8+JGsOArN3tXiS+dcd8IKaomL8ighhdrYX/zRZFJcFfxe5sEkQdfG16BMvFig2sC2z3hfI+EoqQudg6Ihx6cVrnPI6o0L/T67UVrl9zkxkl0YqREE3ShZfLw+v/6FzuChT4H3qqXlT3UKDEc7gpNmTy8/r/+xX80hcWpZQq9odtbEgZS37iggR6GV6CMvPgzTqK1S4lTQtADeaA805IsfUEMr0BZebF7ba/XjZ/y6Xx1jnHyDbaLTfht6TSMSgteoX9+TK/n4BU2ORgU4BBnIzxiy3VDuh621ttAclx2H96869VqM0mgT0jntdoS5MD+ZDjRC+KxLZ7XRb+2gfphoVskVz96+fo0gWkicke4lDGi1+nhDAtgTFlFf3xretcUW/nl7eko8Wjz0SCGrPkU+1Xx5/pp/cu2521B8xUUr02TaFbbI3e0gaiTVAudNWrUhr76rZSzsVdqDI+m0+lwsyPrmf+7ocqQkv2WyvIqSdv5vwCjn8rw0kuGl14yvPSS4aWXDC+9ZHjpJcNLLxleegkOoClYeCSY0UYq4k9FE3C9bru+uoue2VWsnL/brq/uYv81oyhxR5Aabaa/5c1gXgeWPI021vrI5ILlupufYG+E6gVHkheseud3yv/jGGXV7OOwaL3vG1p66h8FcCc6VHiCkgAAAABJRU5ErkJggg==" alt="" />
                <h1 className='text-black font-bold text-lg text-center my-1'>Marketing Courses by LinkedIn</h1>
                <div className='flex justify-between text-sm'>
                    <span>Rating: 4.6/5.0</span>
                </div>
                <button className='bg-blue-400 px-4 mx-auto w-[120px] py-1 my-2 rounded-lg text-white font-medium mb-2'><a href="https://training.marketing.linkedin.com/building-an-organic-presence-with-linkedin-pages"> Enroll now </a></button>
            </div>

            <div className='my-8 px-4 mx-2 border flex flex-col'>
                <img className='flex my-4 mx-auto rounded-lg w-60 object-cover' src="data:image/png;base64,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" alt="" />
                <h1 className='text-black font-bold text-lg text-center my-1'>Google Career Certification Courses</h1>
                <div className='flex justify-between text-sm'>
                    <span>Rating: 4.9/5.0</span>
                </div>
                <button className='bg-blue-400 px-4 mx-auto w-[120px] py-1 my-2 rounded-lg text-white font-medium mb-2'><a href="https://itexperience.org/google-career-certificate-scholarship-program/">Enroll now</a></button>
            </div>

        </div>
    )
}

export default Courses