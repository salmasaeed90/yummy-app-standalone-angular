"use strict";(self.webpackChunkcourse_app=self.webpackChunkcourse_app||[]).push([[517],{517:(_,s,a)=>{a.r(s),a.d(s,{SubCategoryComponent:()=>g});var i=a(6814),c=a(9310),t=a(4946),n=a(6955);const l=function(o){return["/meal-details",o]};function u(o,d){if(1&o&&(t.TgZ(0,"div",4)(1,"div",5)(2,"div",6),t._UZ(3,"img",7),t.qZA(),t.TgZ(4,"div",8)(5,"h3"),t._uU(6),t.qZA()()()()),2&o){const e=d.$implicit;t.Q6J("routerLink",t.VKq(4,l,e.idMeal)),t.xp6(3),t.Q6J("src",e.strMealThumb,t.LSH)("alt",e.strMeal),t.xp6(3),t.Oqu(e.strMeal?e.strMeal:"breakfast meal")}}let g=(()=>{class o{constructor(e,r){this._RecipesService=e,this._ActivatedRoute=r,this.categoryTitle="",this.categoryData=[]}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.categoryTitle=e.get("title")}}),this.showSubCategory()}showSubCategory(){this._RecipesService.getSubCategory(this.categoryTitle).subscribe({next:e=>{this.categoryData=e.meals}})}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(n.v),t.Y36(c.gz))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-sub-category"]],standalone:!0,features:[t.jDz],decls:4,vars:1,consts:[[1,"show-home-data","show","p-5"],[1,"container"],["id","row",1,"row"],["role","button","class","col-lg-3 col-md-6 col-sm",3,"routerLink",4,"ngFor","ngForOf"],["role","button",1,"col-lg-3","col-md-6","col-sm",3,"routerLink"],[1,"card","cursor-pointer","rounded-2","bg-black","overflow-hidden"],[1,"img"],[1,"w-100","h-100","rounded-2",3,"src","alt"],[1,"title-layer"]],template:function(r,p){1&r&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t.YNc(3,u,7,6,"div",3),t.qZA()()()),2&r&&(t.xp6(3),t.Q6J("ngForOf",p.categoryData))},dependencies:[i.ez,i.sg,c.rH]})}return o})()}}]);