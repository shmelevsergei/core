export interface IAnketaOborotRepository {
    ABO_ABA_ID:                    bigint ;
    ABO_DATETIME:                    Date ;
    ABO_OBOROT_ALL:                  number;
    ABO_OBOROT_BRANDS_MONTH:         number
    ABO_OBOROT_AE:                   number
    ABO_OBOROT_ROSSKO:               number
    ABO_OBOROT_ARKONA:               number
    ABO_OBOROT_AUTORUS:              number
    ABO_SCORES_MONTH_PLAN:           number
    ABO_SCORES_MONTH_FAKT:           number
    ABO_COUNT_ROSSKO:                number
    ABO_COUNT_AE:                    number
    ABO_COUNT_ARKONA:                number
    ABO_COUNT_AUTORUS:               number
    ABO_OBOROT_BRANDS:               number
    ABO_OBOROT_BRAND_LOOK1:          number
    ABO_SCORES:                      number
    ABO_OBOROT_BRAND_LOOK2?:          number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?:   number
    ABO_OBOROT_BRAND_LOOK2_AE?:       number
    ABO_OBOROT_BRAND_LOOK2_ARKONA?:   number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?:  number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?:  number
    ABO_OBOROT_BRANDS_MONTH_AE?:      number
    ABO_OBOROT_BRANDS_MONTH_ARKONA?:  number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: number
    ABO_OBOROT_BRAND1?:               number
    ABO_OBOROT_BRAND2?:               number
    ABO_OBOROT_BRAND3?:               number
    ABO_OBOROT_BRAND4?:               number
    ABO_OBOROT_BRAND5?:               number
    ABO_OBOROT_BRAND6?:               number
    ABO_OBOROT_NEXT?:                 number
    ABO_SCORES_MONTH_PLAN_NEXT:      number
    ABO_ABA_REMZONA_QTY?:             number
}