import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  FormLabel,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Spacer } from "../USAFormStyles";
import { SectionTitle } from "components/Services/ServicesStyles";

const QuestionsSection: React.FC = () => {
  const { control } = useFormContext();
  const { t } = useTranslation();

  const questions = [
    t("questionSection.question1"),
    t("questionSection.question2"),
    t("questionSection.question3"),
    t("questionSection.question4"),
    t("questionSection.question5"),
    t("questionSection.question6"),
    t("questionSection.question7"),
    t("questionSection.question8"),
    t("questionSection.question9"),
    t("questionSection.question10"),
    t("questionSection.question11"),
    t("questionSection.question12"),
    t("questionSection.question13"),
    t("questionSection.question14"),
    t("questionSection.question15"),
    t("questionSection.question16"),
    t("questionSection.question17"),
    t("questionSection.question18"),
    t("questionSection.question19"),
    t("questionSection.question20"),
  ];

  return (
    <div>
      <SectionTitle>{t("questionSection.sectionTitle")}</SectionTitle>
      <Typography variant="body1" gutterBottom>
        {t("questionSection.warningText")}
      </Typography>
      <Spacer />
      {questions.map((question, index) => (
        <div key={index}>
          <FormLabel component="legend" sx={{ marginBottom: 2 }}>
            {question}
          </FormLabel>
        </div>
      ))}
      <div>
        <Spacer />
        <FormLabel component="legend">
          {t("questionSection.sectionDescription")}
        </FormLabel>
        <Controller
          name="overallResponse"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <RadioGroup {...field} row>
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label={t("yes")}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label={t("no")}
              />
            </RadioGroup>
          )}
        />
      </div>
    </div>
  );
};

export default QuestionsSection;
