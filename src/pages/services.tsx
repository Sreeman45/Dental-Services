
interface Service {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}
const services:Service[]=[
  {
    id: 1,
    title: "Preventive Dentistry",
    description: "Focuses on maintaining oral health and preventing dental issues through regular cleanings, fluoride treatments, sealants, and oral exams.",
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMVFhMXFxgVFxcVFxUVFRUVFRUXFxUXFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0fICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLf/AABEIAL4BCgMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAADBAUCBgEAB//EADgQAAEDAwIEBAUEAQMEAwAAAAEAAhEDBCExQQUSUWEicYGRBhOhsfAyQsHR8RQjUhZykuEVYoL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAjEQACAgMBAAMAAgMAAAAAAAAAAQIRAxIhMSJBURNhFEJx/9oADAMBAAIRAxEAPwD8+ubvpgKXXui7A0S9asXHsvWhJVF7s9XwCIGLXItY2oGEeiwle06JKsWFgllIpGAvbWhKs2lmU7bWYVCnRhRcitEp1rCyyhAVo0ZS9zRgJlIZIQpUwqFqz2WPkeEJu2opmxq4evb4SmKIwsOp7bIrRskcgag3pYhOPYgVaKVSpjxiL12DlxPTSNOnuvhR8KIWkiNtUdlPwpm7FkqRyXFLXxz1WrWzVjidCSg2tKDC0XSC1aR7SpxhbJTYprD6aDmKooSqUZylatAqs1i+FELKZmqIZpyiW9DOU/WoZW6NMJtgPwXdaJS4tFaAQqrAlbJ9OTubeEqGkLorq3UuvbQnjIDQOmF7WpI1BiYqAQi2LREqUyg8qsPopc0VrC0QWhMU2obQmqLE7ZOEQlOmmqdCVqjSTtGkkbOhRMWtrnyV2zt0vZ0lXt2KcmGglOkmRSwvqTUw0JAgqLEG7t+qdFN2SBoMx0QLlzeXA+8/1CYZeiwbsmKbIQrbWU0ZStjNfR4QFrC+azdacELZqMOpjYiO5AWOXWNtV6+kSvHTEenQnM56oDpANCnbK3kuB2a53s0kfWEkZKdsOJmmHAMYS5paS4GYO2uFovvQZIuuEy+blJUxmVYu6JJzic9v8IFemNPsmBFoA0lFezqvgyFqZQQWhcLXL3Xz2jqsHsUAOJl5WWNW56pfdMmLqGLllxwtNwvgESbQpVCRr0xlWnUwQpt1SRoQRt4EhbIQnCCizhOBoE9LFqaqHCTLkQ0Q2hO2qzb2kjCK2kQqNE8Uk+FK3aIT9FghTbV8KkHYUmdND1s1UqL1DZdbJ2hVKm2NoWWFMMZKl0rhO21YSCSfRC0FxZdvOHhgHMccuOUR4umfv2XPV2/nTpKri75hDoMxnSBnRIXgyBrAg5nO+uyMgY7T6L0gmA5Da/8AteGsEt0Vqxygc5EolWmdQICXtX5BOgPur1zx5xEU6TABoSJ+iya+xJJp8JNO0eToV6+ycNRHmD7IlXjFfaB5AD+Eo7i79C5baIdZMHcUYkEEen2S4oGY++E62+BjmA88/YJmpXpvfodoxrjsT90aTNs0vCSHkYPiH2zsvMEgHTQdgn7wMILm7GOijXNSNFnwMPkN3bmNGDJ3U51wTgL20tX1HRt+dVaocPaz8z7qUpseTjj4+siChUOxQ6lN7dQukceyWflIpol/O/whNq9VrCZ4hbyJ3/MFT6T1aLsZNSVoO1FDoQZCDXrxjdOSasJWuoU+vdJz/Rgjxan6KYbJ0lpBkexHUIq2Tc8aF6tcFH+ZhTbsFh0XnzS7ATpAdPwNVrJcvVGz4W5+uPP+Ec2Df+IT0RlmSdIW4VbmVYPDvmHlAnHqvbW3LBonraq5pGkd906Zyv05i5s3U3EFZfWgLs3cN+cyeUHxcgMiS46AD0OdMLkuIWhY6DgqcjuwZb4xjg1HndJ0H3XT21q5xhoBA+vYfm6n/CNjygvMeLT+V19m0AdEuqonmzNz4Tjwxrh/xd9uyl3Fs6mey6QRzOA1mUte0xGepUJKulcWaSdEWhdJl9xJJO/RGrcHLwXUxpnpj+FDdcwYOowj1HXFxn4O1q/RUrHh0gOd7LzgloOX5jhM6dgq1MSp5JKPok8v+sQ9tbNgiB6653+qadYh2WkRodtOkpVoJIEZOOqcZVLRI5iY/ccAAxERjVIsl+nO7MXNgGtG/XH53US8sGOEhXKlfWeadI281PqNE4WlMMJSX2czXplhWmVzEqlf0M9ip1rahwqZALROd87KmN2dSmpK2CfcFEsbM1TJ0SpZJwun4dbgN8vui33psk9I8NU6AZ+kDGyxUknumyzoIWflbqErkce32TqlIobmKhUYgvomEFE2xOr0wRsoHEByun0K6KpSIUrilKQe4/wqxlTGhKmSHV0WxoFx5ileFUfmVOUjTX0XS2lryPEjwwfTorMfLkUVS9MPoEgEDKl8TpljSR+qF0td+yh8Tt+YHumi+nAziLyvzED1VLhNrmYX1xZNBaRpuT2lX7YsazEKrY+3xpCd3f8AywB13UY8UPf2Vd3A/mnmJI7dlTZ8PCB4Sg5JeiKJWtrYFs6hbdwwnLYGuuyV+Gr4OYWHUGR+eyvspcwOk9ZgIKRnHpz9CsWGTtkbZCj8cpF3+4ddDvg6SuspWsHYzjxAH2lKX1izlcCPY+eI0jf2QbsaPxYDhNuW0W+58z0VehcAgxMj8ykrNvhEEjAwtsa1pPKZnJHc6rPgq6wtWvORl5wAMSdABC+p1OdmckD8CVtqZBBMHz/lV7Sk0YgZGehHRcmzkzqSUUfW1flbg6iD/S5Li9v/ALwA/dGncwunr0+V3mo9/THzaecl8Drgcxntgpo5L+LKYno7LNswNaGDsFUoU8KdZCTPRUm1ggls7ZGTCilkHYZRfk/qzgiACI1MrDK46rDq6bVC2zVZ4GoE+6QfuRujVakoTqmISNWFOiVcPJJafQqTdAtJ7jKuXLQfNJVKYMg6JYcfTohOhfgltzO5joNO5XStpgJOypNa0EJqk8ExIHdWl+E8s9pWFWyRCAHrD6i3ERdnrnBYdUBSz3IBJSbh1C3VQKVdMBCarJOqYWcrCkK8DogVnE4BySPzGfur3EKgaBjrI6dMajC5+jdCnVBmAQf4wrAqmpT99tG6jJ800m6sD96KOuAVOuqpDgToP6TdRhaDuh8u5AQWQVxEy1j2mRMSffAhL8KbiDq0kZ80S5Z4pacpGyq8rzJ3kzurW6Fivo6W0B1/aEF926Tk6rNbibQyAop4gOqm4t+lEwnBLjkcCu9ta4eyRH99vzovzThVwHZG66jht6aZ7HVVoWRduamYI2gbEZmf87JC+0c3DuWROcnrg9U3TuKbwSNUncPAIAOJ/P4U0nY1qgVrOh27/mFvhVu7mc9zp5jgaBrdgB/K1Vc0nPum6LmsETJ2Wlu3T8FWqVjRpBGbyw0AQ4TJnWfsptK+6hFbcgEFK4/gUxiuznk6R5qbcW7TVZB/TzHoTIgSPU+ydq3Zdug1sVAf/ql1cXY6lfBuk7lbC3RclmulM0UQBgV7K8JXhKDMYc5Yc9euKwUoReqUHmBBlGqpPmhZjIes3SyOyHRc7IJnovKQ5WRutUkaFv0aWCtcy8JWaFsC4rBWqhQyVkgmKiSrhOOKUrJ0gWRrmkHVGA6cwnyBk/ZdJd30NA+npCg3A8YO4n8+icqOwmguULPpl1wEG9f4YC8gSiupYTJIRkmYS1/TEcw137hN1xBhJcRqw2Nz9lTgYiAqu6rEL0FDNQI0OKcBueV/KdD913VAYX5w1sLqeE8eAbDzBG+xTzX2KvKOjyMgqZxfiPymlxOf2jqUpffEbQPB4j6gD+1zF3cvqO5nmT9B2AU9LYVw/QuD8TbcUw4fq/cOh/pU6YX5XZXb6Tw9hg/QjoRuF1th8Y04Aqsc09W+Jv8AaZoFHYNozlDcyFLtvim2OlUD/uDm/cL66+JrTeoD/wBoc77BTaMrKbSZWXPJcPVc1cfGtJs/Lpvcepho/k/RK8D+Iala7YHQ1pDgGjSYmSTqcIODY6O8pJljko1y2HqckBDXOvC9L83dfc6ShgpcsFyFzLLnoJGPajlPrFNOckr+pgnoCVpLgy9Gbe6D2gj8O6aYuW+BqnNb52e76nm/ldQwp1GuCSYbnWS9DLlgvWoUI5yC9y+L0J7kKCfF6HzCV4SsHuniBiF1+r1Rg0kgDdcf8R8YcLgfLd+gQehcdQR6D6r6h8XPGtMHycR/CrGD9A2jr6tsQgur7Ermv+q6rzysYBPUk/YBMt+a4eJxz/xEfXVLJUaKsNf37KeXO8XTf2XL3F+97+bToOgTV9whwlzSXdQdffdJUqZmIyrQSozsP/rXRplJGe6u23Dw5Mf/AA7e6ykjNP7JLLMudAVyjw9oEQi8Ptd1UbRCDlYVw5+64W2JAUW6oFq7wWs7Kbe8JDiNuqHUG0zkGUiVs2ztgT6L9CteFU2NA5QjvshGAEXMB+Z8q8K6Hj3DdXNGRqOql8Jsvmv5dhk/0ippqwtUAsbF9Z3KwT32HmV1nD/hltMtfzOL2kOnQSO3RU+F2YYIAhVGyCCNoPX6KbnYRq1qAtk6rReJhe8W5HxWp8rHHD2DA5h+5o05SD7gqTU4l8oEljjGzYJ9ASFKTp0ZK+lUHK24rl7T4yo1Hhgp1ST1DY8/1Kg/jLdmu+iEuehSZWaVioQpJ4sdmj1JXjr5505R9ful2DqUXLn/AIo4hTZRqNLwHuaWtbPiPNjTplHd8x373emPsl6vDZBlsg4yJ+qEX3qDS/SZ8EXpYx7SJbzSI1mBPpousZxBvU+xULh/DhTHK3A7nrnUqs3SE7ezbQrSQwb5n/JBqcUpj930KX+WVl1EHUSh8jUgNx8S0Gal/wD4PA9yEv8A9W2v/J3lyORqlm1c9a8Iabqp4RyMIgbcxaDp2mfUJ4pP0D/otu+JGuH+1Qqv6EgMaf8A9EqddXF9WwC2k3oDLvV0faFVdS6Z8lptFZc8RuHLs+F3nWoJ8if5S958NVWQQWvHbBHcg7Ls20Vp4wqLJIRpEHg3AuTxHJ3Ow8uqvfJHLygaZC1QbMe57AFM4EjufbZK5X1h/ol1rZSbq0EzC6WqzCnXVHCWxkB4bbEiYwNVU+SxS7OqRhUA/unTQsk7BUKcJpoQ6QTDAl2odop8MuBRIeWh2uDpokrmr8yoXQBuQMALT2+GfdCtRv1TPJaoVR+xxoT1Gm2CCJxjz2SdIJtj1lIziTOJcOa8d/zVQ+FcPFNz8ZJA9B/ldrcNHIDEHrJk+nRQ3M8RSz54NF2qCUGJxoQ6TUblUthqBV2n2WeKUBzGAIgRHlv1KNCzV/8ASZO0Cjlm8IYyqajWwT7Z1gJxtrKotoS70RWUEsbfoZMQbYlE/wBLCpcgjX0380VruwPompC2yYKEL2rSPUlPuaNfwe6DXKIpOc2CmmCdfzCXOZT1uMfn0U4vozRg0Vl1FOALNQYVU0ITarMpChTAe89Tn/xA/hVard1Nsmgueep+wASTlTQ8VxjTKMovylqiivR24LQB9NAqtTkJOutsagNvU26T9QmhnKTsS01C12n/AKVMMGgQ6M+MWclLgKhUbskqtIwgYltEOKZhArNIMozawTDUUKDJTRqBoKRZVXlZ5K2jb6Oom6t1zGNk9QCj2zvErVuxFqmCfBliZpUjvheMaAErX4lBgZSOXRKbKl/VbyNaNh4jrJk/2obn8zi7qV9fX0MPUrFkeZjT2/hadjxhSHaKOEKlovZUm6DR69BqFbcViuQAT2TJ2ahajVh2VTqNBAcFydzXeT4Wlx7ds6q78O3XOzJ91TH4bJClYyAtAI1Zg28kN2Er4yaPCQlLlyLUckq5nCDlwKiCt8k9U9RKRtacPd5DPvA+6cDSFtWkF+jQKHVcscyw96KkLqAvXw0+Sl8IqYI7n7pjiLiQg8ODf0znX/CFbOyiVRKjVt2NUWhRgayh1XTI6Iyi6JoA56DUb7orRJXrwUmOL+wyZF+cKdeOoz2OV0LCCuMvbiaxI8ld4beeEkntldCX0GcXSY/UeAdUuXzhCuLgEa5Sle5IExAH1U1afAVYPiD1H+e5Eu7suOAl8q8YfoYnSUitVXYQqRXtU4TFQVpVh+V0FtWAXMAicqnZvOJKjOLuzZIle7ruOAhW9Jrcu9d0PmAEkqdcXhf4Qmil6CGNy59GOIV/mODW6SrvDKcNjYY9lAZT5SD3XQWjXR5rSiPlVJJDny9wfML0Us6whNcdOiI6poo69I9NuaAp3EKkjlGScAdzong7sub45dPY6BiZ8wO3dU14Nii5SoBUsnODnMaXMYfE4Dwz59cSneHvgBzM7H+/zqkrvjUGnTpyKVEGAcc73DxvcO5x2CetK9qynLXlrixhh0u5n/uAgQ0AzrsQcpnBVw6ZwevhcpVg4aLdUg6KfYXII8xhFNUzkhBo4nGmY5XEwB/CxeVBTGY08042pIjTupRqUud5qudzNafltbpzkeFx8ifotHHQ0fkybTvQ1/MCSf3AiAc6YJkDqr9tdNe3WdPdcy60A/ST32XlrcOpunbdM1ReWJSXDq30t0s9hRbe6Dmgr6pWEJP40zm6iJxMgQHGJOTBMAdgpQr8plp0Jg6SNNPzVE4zdc7oGyQamjFJHdjh8enW8GvfmCNOqfuaYGQFyHDLs0nzscFdQ66a4YKFKqOXNjcZWvADcJPil1ysOUw9pCg8YrSC3X8ykiqBGOzJUzJOpVPh1MOa47qaMLdvcOYZG+F0cLzjaorUgAdZM6I9W2c7BCJwhrH5eMnToPRP167QOXH8p0onnztOjmn23K/sdOwXzqGVRqNklxxiAk3XaZhx2M06iJUdhSmVEb5xUjt1NzsiM5hoTCUlMUqyVoqhhocdSUSk0AoQrLHNlb/gy6OViqfDb2Bynbf+1MAkL2i4iQN0LC4KUaZ0My4nY/ZLF7p7KbSrOY4wZb0mCJ6FCuLtzXdfp9FJpsn/AI7vheqXXK0k6D8lcdxO6NR5d7Jl/EHDmJg+EiCARLsTB3Ez5qYCqWdGDBpbZlpzJzrKYsiQZnTOgP3wEOnTkL4O5SiWfS/wurTaSarnAASA2Ceb1x/eF7dcXacA6HEgNn2wFFL5CHyovzhD+GLdyOjF08U+ctEbS4A/XUa6KKyqXPLjugnRatkALGoptFWml7hsrwVIWX1E12RqmCZXc3Qlevu3u3K81WYS0PwWfSJK8qsgd08DCTuDJRGUrYIgRMrprCPltiJgLknuhN2HEHUwRtqgDNjco8Okq1ZBBK5++a3mgeq8q3bnyZgDohASjRLHj16wdOlqvKlJHiF6U6C30+s7ktwnm3QnmcMyo5MHbfX2WgSBKyElijLrKdzfNIJ32CkF3deVHocphY41E//Z"
  },
  {
    id: 2,
    title: "Restorative Dentistry",
    description: "Aims to restore the function and integrity of damaged or missing teeth with procedures like fillings, crowns, bridges, and dental implants.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTi-YAnfHmlOuLc8njltA0n3W9Y4b4HVS5w&s"
  },
  {
    id: 3,
    title: "Cosmetic Dentistry",
    description: "Enhances the appearance of teeth and smiles through teeth whitening, veneers, bonding, and smile makeovers.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4atMSkRrluncRiAAmbFjXSvCIPBFIBWZzA&s"
  },
  {
    id: 4,
    title: "Orthodontics",
    description: "Corrects misaligned teeth and jaws using braces, clear aligners, and other appliances to improve bite and aesthetics.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XDKXVCQlSTeeK7zRiKpuNRo22Gy-DSjabA&s"
  },
  {
    id: 5,
    title: "Periodontics",
    description: "Treats gum diseases and conditions affecting the supporting structures of teeth, including scaling, root planing, and gum grafts.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFObzevwYIfAeXDlfuKH1eM1Vg6VokmB_cUA&s"
  },
  {
    id: 6,
    title: "Prosthodontics",
    description: "Specializes in designing and fitting artificial replacements for missing or damaged teeth, such as dentures, crowns, and bridges.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSpxKRu9KKIUF-JN97r3xhQ3YgiA4mZTACA&s"
  }
];

export default function Services() {
  return (
    <section className="container mx-auto px-6 py-8 animate-fade-in-up">
      <h2 className="text-5xl md:text-7xl font-bold mb-8 text-center  font-[serif] bg-gradient-to-r from-green-400  to-indigo-600  bg-clip-text text-transparent">Dental Services</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map(service => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="md:text-3xl text-2xl font-[mono] font-semibold text-stone-900 mb-2">{service.title}</h3>
              <p className=" text-sm md:text-lg text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}