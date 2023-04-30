import React from "react";
import "./AboutBox.css";
import { TitleBox } from "../../index";
const AboutBox = () => {
    return (
        <>
            <div className="about min-h-[100vh]">
                <TitleBox
                    title={`من نحن`}
                    description={`منصات المشاهير هي المنصة الأولى عالمياً التي تجمع (مشاهير مواقع التواصل الاجتماعي و المتابعين و التجار) في مكان واحد لتعزز التواصل بين المتابع و المشهور و تجعل العمل بين المشاهير و التجار سهل و يسير.
المنصة مبنية لتخلق نوع جديد في مجال (التواصل , إدارة الأعمال , التسويق) و لتقدم قيمة عالية تنفع جميع أفراد المجتمع.
نشأت فكرة المشروع في عام ٢٠٢٠ ، فوضعت الفكرة على الورق و دراست مع الفريق في عام ٢٠٢١ وبعد طرح الأفكار و ترتيبها وعمل دراسة جدوى للمشروع تم اكتمال الصورة و بدأ تنفيذ المشروع برمجياً عام ٢٠٢٢ و تم بدء العمل على الأوراق القانونية و تثبيت الملكية الفكرية الخاصة بالمشروع و التأكد من حسن عمله برمجياً و قانونياً  ليتم اطلاقه بشكل رسمي في عام ٢٠٢٣.
المشروع سعودي بالكامل والقائمين عليه سعوديين، مقره الرئيسي في مدينة جدة (برج الإتقان سكوير) من أهم أهداف المشروع المستقبلية افتتاح فروع تابعة للفرع الرئيسي بأكثر من دولة ليعمل على مستوى العالم.
هدفنا هو العالمية و سنبدأ من البلد الذي تأسس به المشروع "المملكة العربية السعودية".
المشروع مرخص من قبل هيئة المسوع المرئي و له علامة تجارية سعودية موثقة قانونياً و جاري العمل على توثيق العلامة التجارية في بعض الدول العربية.
رقم السجل التجاري (4030454416).
جميع مميزات المنصة مسجلة قانونياً لدى الهيئة السعودية لحماية الملكية الفكرية.
`}
                />
                <div className="container h-full flex justify-center items-center mt-[48px]">
                    <div className="content min-h-[681px] w-full py-[43px] px-[30px] md:px-[58px] flex gap-[43px] flex-col justify-start items-start">
                        <div className="box flex-col justify-start items-start">
                            <h6>فكرة المنصة</h6>
                            <p>
                                فكرة المنصة تهدف إلى تعزيز عدة عناصر : التواصل
                                المنصة تعزز التواصل بين مختلف فئات المجتمع و
                                تتيح الفرصة لعامة المستخدمين من التقرب والتواصل
                                مع مشهورهم المفضل. المنصة تعزز التواصل بين مختلف
                                فئات المجتمع و تتيح الفرصة لعامة المستخدمين من
                                التقرب والتواصل مع مشهورهم المفضل. المنصة تساعد
                                الشركات على الوصول الأفضل للفئات المستهدفة و
                                اختيار المشهور المناسب للعمل على إعلاناتها. فرص
                                العمل تساهم في تعزيز انتشار المشاهير المبتدئن
                                وخلق فرص عمل جديدة لهم ،و زيادة الدخل لدى
                                المشاهير المحترفين ،و تطوير أعمال المعلنين.
                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>رسالتنا</h6>
                            <p>
                                استقطاب الشباب لتنمية مهاراتهم وتطويرها مع منصات
                                المشاهير لتقديم محتوى هادف حسب الأصول مع الحفاظ
                                على الهوية الثقافية و المجتمعية و ثقل مهاراتهم و
                                تحويلها لمصدر دخل يساعد بتطوير الفرد و المجتمع.
                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>هدفنا</h6>
                            <p>
                                منصات المشاهير تعمل على سبع أهداف رئيسية :
                                1.توفير الفرص للمبتدئين و الراغبين بالدخول بمجال
                                صناعة المحتوى. 2. تقديم أدوات تساعد المشاهير
                                المحترفين على تطوير و إدارة أعمالهم. 3. توسيع
                                حجم العمل بمجال الإعلان والتسويق في الوطن
                                العربي. 4. التركيز على دعم صناع المحتوى و تطوير
                                خبراتهم. 5. توفير فرص إعلان أكثر فعالية للتجار
                                والشركات. 6. اتاحة الفرصة للمتابع بمشاركة
                                مناسباته مع مشهوره المفضل. 7. جمع فئات المجتمع
                                في منصة توحد مصالحهم و تلبي رغباتهم.
                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>الرؤية </h6>
                            <p>
                                تسعى منصات المشاهير إلى تطوير صناعة المحتوى
                                الإعلاني في الوطن العربي و تسليط الضوء على
                                المشاهير من قبل الشركات لنساعد في تطوير هذه
                                الصناعة في الوطن العربي و نرتقي فيها لنكون
                                المنافس الأقوى عالماً (إعلانياً و إعلامياً).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutBox;
